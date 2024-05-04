import { createContext, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"

import { api } from "../services"
import { NotifyError, NotifySucess } from "../components/fragments"

export const UserAdmContext = createContext({})

export const UserAdmProvider = ({children}) =>{

    const localToken = localStorage.getItem("@KEYADM")
    const [ token, setToken ] = useState(localToken ? localToken: "")
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const idAdm = localStorage.getItem('@IDADM')
    
    const [ user, setUser ] = useState(null)

    const [ profile, setProfile ] = useState([])
    const [ jobExperience, setJobExperience ] = useState([])
    const [ education, setEducation ] = useState([])
    const [ projectsList, setProjectsList ] = useState([])
    const [ articlesList, setArticlesList ] = useState([])
    const [ message, setMessage ] = useState([])
    

    const navigate = useNavigate()
    const { state } = useLocation()
    const pathName = window.location.pathname

    const { data } = useQuery(
        {
            queryKey: [ 'adm' ],
            queryFn: async () => {
                const { data } = await api.get(`/user/${idAdm}`, { ...headers })
                setUser(data)
                navigate(pathName)                
                return data
            }
        }
    )

    const { Profile } = useQuery(
        {
            queryKey: ['profile'],
            queryFn: async () => {
                const { data } = await api.get('/profile/')
                setProfile(data)
                return data
            }
        }
    )

    const { JobExperience } = useQuery(
        {
            queryKey: ['jobExperience'],
            queryFn: async () => {
                const { data } = await api.get('/jobExperience/get')
                setJobExperience(data)
                return data                
            }
        }
    )

    const { Education } = useQuery(
        {
            queryKey: ['education'],
            queryFn: async () =>{
                const { data } = await api.get('/education/get')
                setEducation(data)
                return data
            }
        }
    )

    const { Projects } = useQuery(
        {
            queryKey: ['projectsList'],
            queryFn: async () =>{
                const { data } = await api.get('/projects/get')
                setProjectsList(data)
                return data
            }
        }
    )

    const { Articles } = useQuery(
        {
            queryKey: ['articles'],
            queryFn: async () =>{
                const { data } = await api.get('/articles/get')
                setArticlesList(data)
                return data
            }
            
        }
    )

    const { Message } = useQuery(
        {
            queryKey: ['message'],
            queryFn: async () =>{
                const { data } = await api.get('/message/get')
                setMessage(data)
                return data
            }
        }
    )
    
    const userAdmLogin = async (

        payLoad, 
        setLoading, 
        reset

    ) => {

        try {
            setLoading(true)

            const { data } = await api.post("/user/login", payLoad)
            localStorage.setItem("@KEYADM", data?.accessToken)
            localStorage.setItem('@IDADM', data?.user.id)
            setToken(data?.accessToken)
            setUser(data?.user)
        
            NotifySucess("Login Successfull!")
            navigate(state?.lastRoute ? state.lastRoute : "/dashboard")
            reset()

        } catch (error) {

            console.log(error)
            NotifyError("Invalid Wsername or Password")
            
        }finally{
            setLoading(false)
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@KEYADM")
        localStorage.removeItem("@IDADM")
        NotifyError("Logout successful!")
        navigate("/login")
    }

    return(
    <UserAdmContext.Provider value={
        {
            localToken,
            token, 
            setToken,
            headers,
            idAdm,
            user, 
            setUser,
            data,
            profile, 
            setProfile,
            jobExperience, 
            setJobExperience,
            education, 
            setEducation,
            projectsList, 
            setProjectsList,
            articlesList, 
            setArticlesList,
            message, 
            setMessage,
            userAdmLogin,
            userLogout
        }
    }>
        {children}        
    </UserAdmContext.Provider>
    ) 
}