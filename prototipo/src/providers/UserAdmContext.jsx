import { createContext, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"

import { api } from "../services"
import { NotifyError, NotifySucess } from "../components/fragments"

export const UserAdmContext = createContext({})

export const UserAdmProvider = ({children}) =>{

    const localToken = localStorage.getItem("@KEYADM")
    const idAdm = localStorage.getItem("@IDADM")
    const [ token, setToken ] = useState(localToken ? localToken: "")
    const [ user, setUser ] = useState([])
    const [ messageList, setMessageList ] = useState([])
    const [ projectsList, setProjectsList ] = useState([])
     const [ articlesList, setArticlesList ] = useState([])
    
    const headers = { headers: { Authorization: `Bearer ${token}` } }

    const navigate = useNavigate()
    const { state } = useLocation()
    const pathName = window.location.pathname

   /*  const { data } = useQuery(
        {
            queryKey: [ "adm" ],
            queryFn: async () => {
                const { data } = await api.get(`/users/${idAdm}`, { ...headers })
                setUser(data)
                navigate(pathName)
                return data                
            }
        }
    ) */
    
    const { data } = useQuery(
        {
            queryKey: [ "adm" ],
            queryFn: async () => {
                const { data } = await api.get(`/user`)
                const userData = data[0]
                setUser(data[0])
                setMessageList(userData?.message)
                setProjectsList(userData?.projects)
                setArticlesList(userData?.articles)
                navigate(pathName)
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

            const { data } = await api.post("/login", payLoad)
            localStorage.setItem("@KEYADM", data?.accessToken)
            localStorage.setItem("@IDADM", data?.user.id)
            setToken(data?.accessToken)
            setUser(data?.user)

            NotifySucess("Login Successfull!")
            navigate(state?.lastRoute ? state.lastRoute : "/dashgboard")
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
        localStorage.removeItem("@TOKEN")
        navigate("/login")
    }

    return(
    <UserAdmContext.Provider value={
        {
            data,
            userAdmLogin,
            user,
            userLogout,
            headers,
            messageList, 
            setMessageList,
            projectsList, 
            setProjectsList,
            articlesList, 
            setArticlesList,
        }
    }>
        {children}        
    </UserAdmContext.Provider>
    ) 
}