import { useContext, useState, useRef} from "react"

import { DefaultTemplate, TemplateHomePage } from "../../components/templade"
import { 
    SectionBannerHomePage,
    SectionAboutHomePage,
    SectionMeEmail,
    SectionWorkplace,
 } from "../../components/sectionsPage/sectionsHomePage"

import { NavModal } from "../../components/fragments"
import { AppBehaviorContext } from "../../providers"
import { useScreenWidth } from "../../hooks"


export const HomePage = () =>{
    const { sectionHomepage, screenWidth } = useContext(AppBehaviorContext)
    const [ isOpen, setIsOpen] = useState(false) 

    useScreenWidth()
    
    return(
        <>
            {
                screenWidth < 700  ?
                 <DefaultTemplate setIsOpen={setIsOpen}>
                    <div>
                        
                        <SectionBannerHomePage />  
                        <SectionAboutHomePage /> 
                        <SectionWorkplace />
                        <SectionMeEmail /> 

                    </div>                   
                </DefaultTemplate> :
                <TemplateHomePage setIsOpen={setIsOpen}>                      
                    <div >
                        {
                            sectionHomepage === "" ? <SectionBannerHomePage /> : 
                            sectionHomepage === "about" ? <SectionAboutHomePage /> :
                            sectionHomepage === "workplace" ? <SectionWorkplace />:
                            sectionHomepage === "contact" ? <SectionMeEmail /> : null
                        }

                    </div>
                </TemplateHomePage>

            }
                {
                    isOpen ? <NavModal 
                        setIsOpen={setIsOpen}
                    /> : null
                }
        </>
    )
}