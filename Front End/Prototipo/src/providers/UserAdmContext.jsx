import { createContext, useContext, useEffect, useState } from "react"
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
    const [ editProfile, setEditProfile ] = useState([])
    const [ editContactProfile, setEditContactProfile ] = useState([])

    const [ socialMediaList, setSocialMediaList ] = useState([])

    const [ jobExperience, setJobExperience ] = useState([])
    const [ education, setEducation ] = useState([])

    const [ projectsList, setProjectsList ] = useState([])
    const [ editProjects, setEditProjects ] = useState([])
    const [ project, setProject] = useState({})
    
    const [ articlesList, setArticlesList ] = useState([])
    const [ messageList, setMessageList ] = useState([])
    

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
                const { data } = await api.get("/profile/")
                setProfile(data)
                return data
            }
        }
    )

    const profileUpdate = async (

        payload,
        setLoading,
        reset

    ) => {

        try {
            setLoading(true)

            const { data } = await api.patch(
                "/profile/update/", 
                payload, 
                headers
            )

            NotifySucess('User update successfully!')
            reset()
    
        } catch (error) {

            console.log(error)
            NotifyError('Unfortunately something went wrong! ')

        }finally{

            setLoading(false)

        }
    }

    const contactUpdate = async (

        payload,
        setLoading,
        reset

    ) => {

        try {
            setLoading(true)

            const { data } = await api.patch(
                "/profile/contact/update/", 
                payload, 
                headers
            )

            NotifySucess('User update successfully!')
            reset()
    
        } catch (error) {

            console.log(error)
            NotifyError('Unfortunately something went wrong! ')

        }finally{

            setLoading(false)

        }
    }

    const socialMediaRegister = async (
        
        payload,
        setLoading,
        reset

    ) => {
        try {
            setLoading(true)

            const { data } = await api.post(
                "/socialmedia/",
                payload,
                headers
            )

            NotifySucess('User update successfully!')
            reset()
            
        } catch (error) {
            
        }finally{

        }
    }

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

    const projectsRegister = async ( 

        payload, 
        setLoading,
        reset,
        
        
     ) =>{

        try {
            setLoading(true)
            const { data } = await api.post(
                `/projects/`, 
                payload, 
                headers
            )
            
            setProjectsList( [ ...projectsList, data ] )

            NotifySucess("Project registered successfully")

            reset()
        } catch (error) {

            console.log(error)
            NotifyError("Unfortunately something went wrong")
            
        }finally{
            setLoading(false)
        }
    }
    
    const projectImageRegister = async ( 

        payload, 
        setLoading,
        reset,
        projectImageRegister
        
     ) =>{
        
         
         try {
            setLoading(true)
            const { data } = await api.post(
                `/projects/image/${project.id}`, 
                payload, 
                headers
            )

            NotifySucess("Project registered successfully")

            reset()
        } catch (error) {

            console.log(error)
            NotifyError("Unfortunately something went wrong")
            
        }finally{
            setLoading(false)
            projectImageRegister(false)
        }
    }


    const projectImageUpdate = async (

        payload, 
        setLoading
        
    ) =>{
        try {

            console.log(project.image.id)
            setLoading(true)
            
            const { data } = await api.patch(

                `/projects/image/update/${project.image.id}`, 
                payload,
                headers

            )

            const newProjectsList = projectsList.map(
                project =>{
                    if(project.id === editProjects.id){
                        return data
                    }else{
                        return project
                    }
                }
            )
            
            setProjectsList(newProjectsList)
            NotifySucess("Project edited successfully")
        } catch (error) {
            console.log(error)
            NotifyError("Unfortunately something went wrong")            
        }finally{
            setLoading(false)
        }
    }


    const projectUpdate = async (

        payload, 
        setLoading
        
    ) =>{
        try {
            setLoading(true)
            
            const { data } = await api.patch(

                `/projects/update/${editProjects.id}`, 
                payload,
                headers

            )

            const newProjectsList = projectsList.map(
                project =>{
                    if(project.id === editProjects.id){
                        return data
                    }else{
                        return project
                    }
                }
            )
            
            setProjectsList(newProjectsList)
            NotifySucess("Project edited successfully")
        } catch (error) {
            console.log(error)
            NotifyError("Unfortunately something went wrong")            
        }finally{
            setLoading(false)
        }
    }

    const projectDelete = async (

        projectId,
        setLoading
    ) =>{
        try {
            setLoading(true)

            await api.delete(`/projects/${projectId}`, headers)
            const newProjectsList = projectsList.filter((project) => project.id !== projectId)
            setProjectsList(newProjectsList)
            NotifySucess("Project deleted successfully")
        } catch (error) {
            NotifyError("Unfortunately something went wrong")            
        }finally{
            setLoading(false)
        }
    }

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
                setMessageList(data)
                return data
            }
        }
    )

    const messageMeRegister = async (payLoad, setLoading, reset) =>{
        try {
            setLoading(true)            
            const { data } = await api.post(`/message/${profile.id}`, payLoad)
            setMessageList( [ ...messageList, data] )
            
            NotifySucess("Message sent successfully")            
            reset()
        } catch (error) {
            console.log(error)
            NotifyError("Unfortunately something went wrong")
        }finally{
            setLoading(false)
        }
    }

    const messageMeDelete = async (messageId) => {
        try {
            await api.delete(`/message/${messageId}`)
            const newMessageList = messageList.filter((message) => message.id !== messageId) 
            setMessageList(newMessageList)
            NotifySucess("Message delete successfully")            
        } catch (error) {
            console.log(NotifyError("Unfortunately something went wrong"))            
        }
    }
    
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
    <UserAdmContext.Provider 
        value={
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
                editProfile, 
                setEditProfile,
                editContactProfile, 
                setEditContactProfile,
                Profile,
                profileUpdate,
                contactUpdate,

                jobExperience, 
                setJobExperience,

                education, 
                setEducation,

                projectsList, 
                setProjectsList,
                editProjects, 
                setEditProjects,
                project, 
                setProject,
                projectsRegister,
                projectImageRegister,
                projectImageUpdate,
                projectUpdate,
                projectDelete,

                articlesList, 
                setArticlesList,

                messageList, 
                setMessageList,
                messageMeRegister,
                messageMeDelete,

                userAdmLogin,
                userLogout
            }
    }>
        {children}        
    </UserAdmContext.Provider>
    ) 
}