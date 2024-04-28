import { useFilterProjects, useFilterSubCategory } from "../../../../../../hooks"
import { ProjectCard } from "../ProjectCard"

export const ResultProjects = () => {
    const projectsList = useFilterProjects()

    const independentProjects = useFilterSubCategory(projectsList, "Independent Projects")
    const studyProjects = useFilterSubCategory(projectsList, "Study Projects")

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
                <h2>Study Projects</h2>
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