import { createContext, useContext, useState } from "react"
import { UserAdmContext } from "."
import { NotifyError, NotifySucess } from "../components/fragments"
import { api } from "../services"

export const ProjectsContext = createContext([])

export const ProjectsProvider = ({ children }) => {
    const { projectsList, setProjectsList } = useContext(UserAdmContext)
    const [ editProjects, setEditProjects ] = useState(null)

    const projectsRegister = async ( payload, setLoading ) =>{
        try {
            setLoading(true)
            const { data } = await api.post(`/user/projects`, payload)
            
            setProjectsList( [ ...projectsList, data ] )
            NotifySucess("Project registered successfully")
        } catch (error) {
            console.log(error)
            NotifyError("Unfortunately something went wrong")
        }finally{
            setLoading(false)
        }
    }

    const projectUpdate = async (payload, setLoading) =>{
        try {
            setLoading(true)
            
            const { data } = await api.put(`/user/projects/${editProjects.id}`, payload)

            const newProjectsList = projectsList.map(project =>{
                if(project.id === editProjects.id){
                    return data
                }else{
                    return project
                }
            })
            setProjectsList(newProjectsList)
            NotifySucess("Project edited successfully")
        } catch (error) {
            console.log(error)
            NotifyError("Unfortunately something went wrong")            
        }finally{
            setLoading(false)
        }
    }

    const projectDelete = async (projectId) =>{
        try {
            setLoading(true)

            await api.delete(`/user/projects/${projectId}`)
            const newProjectsList = projectsList.filter((project) => project.id !== projectId)
            setProjectsList(newProjectsList)
            NotifySucess("Project deleted successfully")
        } catch (error) {
            NotifyError("Unfortunately something went wrong")            
        }finally{
            setLoading(false)
        }
    }

    return(
        <ProjectsContext.Provider value={{
                editProjects, 
                setEditProjects,
                projectsRegister,
                projectUpdate,
                projectDelete
            }}>

            { children }

        </ProjectsContext.Provider>
    )
}