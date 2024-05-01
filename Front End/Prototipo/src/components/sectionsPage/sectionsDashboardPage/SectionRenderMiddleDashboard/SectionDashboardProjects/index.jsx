import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { ProjectCard } from "./ProjectCard"

export const SectionDashboardProjects = ({}) => {

    const { projectsList } = useContext(UserAdmContext)
       
    return(
        <div>
            <ul>
                {
                    projectsList?.map((project)=>{
                        return(
                            <ProjectCard
                                key={project.id}
                                project={project} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}