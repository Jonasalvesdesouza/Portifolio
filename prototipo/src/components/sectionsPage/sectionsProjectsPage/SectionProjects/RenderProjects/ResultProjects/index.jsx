import { useFilterProjects, useFilterSubCategory } from "../../../../../../hooks"
import { ProjectCard } from "../ProjectCard"

export const ResultProjects = () => {
    const projectsData = useFilterProjects()

    const independentProjects = useFilterSubCategory(projectsData, "Independent Projects")
    const studyProjects = useFilterSubCategory(projectsData, "Study Projects")

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