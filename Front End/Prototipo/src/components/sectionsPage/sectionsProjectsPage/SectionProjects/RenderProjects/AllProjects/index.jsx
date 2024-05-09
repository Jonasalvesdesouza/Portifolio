import { useContext } from "react"
import { useFilterSubCategory } from "../../../../../../hooks"
import { UserAdmContext } from "../../../../../../providers"
import { ProjectCard } from "../ProjectCard"

export const AllProjects = () => {
    const { projectsList } = useContext(UserAdmContext)

    const independentProjects = useFilterSubCategory(projectsList, "Independent")
    const studyProjects = useFilterSubCategory(projectsList, "Study")
    
    return(
        <div>  
            <div>
                <h2>Independent Projects.</h2>
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
                <h2>Study Projects.</h2>
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