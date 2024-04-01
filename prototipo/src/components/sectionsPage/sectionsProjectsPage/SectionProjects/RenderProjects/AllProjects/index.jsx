import { useContext } from "react"
import { useFilterSubCategory } from "../../../../../../hooks"
import { UserAdmContext } from "../../../../../../providers"
import { ProjectCard } from "../ProjectCard"

export const AllProjects = () => {
    const { projectsList } = useContext(UserAdmContext)

    const independentProjects = useFilterSubCategory(projectsList, "Independent Projects")
    const studyProjects = useFilterSubCategory(projectsList, "Study Projects")

    return(
        <div>  
            <div>
                <ul>
                    {
                        independentProjects?.map(project => {
                            return (
                                <ProjectCard
                                    key={project.id}
                                    project={project} 
                                />
                            )
                        })
                    } 
                </ul>
            </div>
            <div>
                <ul>
                    {
                        studyProjects?.map(project => {
                            return (
                                <ProjectCard
                                    key={project.id}
                                    project={project} 
                                />
                            )
                        })
                    } 
                </ul>                                
            </div>
        </div>
    )
}