import { useState } from "react"

import { DefaultTemplade } from "../../components"
import { 
    SectionAticles, 
    SectionTopBlog 
} from "../../components/sectionsPage/sectionsBlogPage"
import { NavModal } from "../../components/fragments"

export const BlogPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)


    return(
        <DefaultTemplade setIsOpen={setIsOpen}>
            <div>
                <SectionTopBlog />
                <SectionAticles />
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </DefaultTemplade>
    )
}