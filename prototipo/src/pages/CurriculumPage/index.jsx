import { useState } from "react"
import { Header, NavModal } from "../../components/fragments"
import { SectionLeftCurriculum, SectionRightCurriculum } from "../../components/sectionsPage/sectionsCurriculumPage"

export const CurriculumPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <div>
            <Header setIsOpen={setIsOpen} />
           <main>
            <div>
                <SectionLeftCurriculum />
                <SectionRightCurriculum />
            </div>
           </main>

           {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </div>
    )
}