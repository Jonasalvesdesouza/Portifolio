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
    const [ editProjects, setEditProjects ] = useState([])

    const [ socialMediaList, setSocialMediaList ] = useState([])
    const [ hobbyList, setHobbyList ] = useState([])
    const [ skillList, setSkillList ] = useState([])
    const [ jobExperienceList, setJobExperienceList ] = useState([])
    const [ educationList, setEducationList ] = useState([])
    const [ projectsList, setProjectsList ] = useState([])
    const [ articlesList, setArticlesList ] = useState([])
    const [ messageList, setMessageList ] = useState([])

    const [ project, setProject] = useState({})
    const [ article, setArticle ] = useState({})
    const [ jobExperience, setJobExperience ] = useState([])
    const [ education, setEducation ] = useState([])

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
                setSocialMediaList(data.socialMedia)
                setHobbyList(data.hobby)
                setSkillList(data.skill)
                setJobExperienceList(data.jobExperience)
                setEducationList(data.education)
                setProjectsList(data.projects)
                setArticlesList(data.articles)
                setMessageList(data.message)
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

    const projectsRegister = async ( 

        payload, 
        setLoading,
        reset,
        projectsRegister
        
        
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
            projectsRegister(false)
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

            setProjectsList(projectsList.map(project => {
                if (project.id === data.projectId) {
                    return { ...project, image: data }
                } else {
                    return project;
                }
            }))
            
            NotifySucess("Project registered successfully")
            reset()
            projectImageRegister(false)
        } catch (error) {

            console.log(error)
            NotifyError("Unfortunately something went wrong")
            
        }finally{
            setLoading(false)         
        }
    }


    const projectImageUpdate = async (

        payload, 
        setLoading,
        reset,
        projectImageUpdate
        
    ) =>{
        try {

            setLoading(true)
            
            const { data } = await api.patch(

                `/projects/image/update/${project.image.id}`, 
                payload,
                headers

            )

            setProjectsList(projectsList.map(project => {
                if (project.id === data.projectId) {
                    return { ...project, image: data }
                } else {
                    return project;
                }
            }))

            NotifySucess("Project edited successfully")
            projectImageUpdate(false)
            reset()
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
                user, 
                setUser, 
                profile, 
                setProfile, 
                editProfile, 
                setEditProfile, 
                editContactProfile, 
                setEditContactProfile, 
                editProjects, 
                setEditProjects,
                socialMediaList, setSocialMediaList,
                hobbyList,
                setHobbyList,
                skillList,
                setSkillList,
                jobExperienceList,
                setJobExperienceList,
                educationList,
                setEducationList,
                projectsList,
                setProjectsList,
                articlesList,
                setArticlesList,
                messageList,
                setMessageList,
                project, 
                setProject,
                article, 
                setArticle,
                jobExperience, 
                setJobExperience,
                education, 
                setEducation,
                profileUpdate,
                contactUpdate,
                socialMediaRegister,
                projectsRegister,
                projectImageRegister,
                projectImageUpdate,
                projectUpdate,
                projectDelete,
                messageMeRegister,
                messageMeDelete,
                userAdmLogin,
                setProject,
                setArticle,
                setJobExperience,
                setEducation,
                userLogout 
            }
    }>
        {children}        
    </UserAdmContext.Provider>
    ) 
}