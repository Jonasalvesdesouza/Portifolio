import { useState } from "react"
import { DefaultTemplade } from "../../components"
import { SectionProjects, SectionTitleProjects } from "../../components/sectionsPage/sectionsProjectsPage"
import { NavModal } from "../../components/fragments"

export const ProjectsPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    
    return(
        <DefaultTemplade setIsOpen={setIsOpen}>
            <div>
                <SectionTitleProjects />
                <SectionProjects />
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </DefaultTemplade>
    )
}