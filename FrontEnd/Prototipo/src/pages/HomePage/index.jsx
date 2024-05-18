import {

    useContext, 
    useState,

} from "react"

import { DefaultTemplate, TemplateHomePage } from "../../components/templade"
import { 

    SectionBannerHomePage,
    SectionAboutHomePage,
    SectionMeEmail,
    SectionWorkplace,

 } from "../../components/sectionsPage/sectionsHomePage"

import { NavModal } from "../../components/fragments"
import { AppBehaviorContext } from "../../providers"

import {

    useScreenWidth, 
    useCardSwipe, 

 } from "../../hooks"
import { smallResolution } from "../../config"

export const HomePage = () =>{
    const {

        screenWidth, 
        currentCard, 

    } = useContext(AppBehaviorContext)

    const [ isOpen, setIsOpen] = useState(false) 

    const cards = [

        <SectionBannerHomePage />,
        <SectionAboutHomePage />,
        <SectionWorkplace />,
        <SectionMeEmail />

    ]

    const {

        handleTouchStart, 
        handleTouchMove,
        handleTouchEnd 

    } = useCardSwipe(cards)

    useScreenWidth()

    return(
        <>
            {
                screenWidth < smallResolution  ?
                 <DefaultTemplate setIsOpen={setIsOpen}>
                    <div>

                        <SectionBannerHomePage />  
                        <SectionAboutHomePage /> 
                        <SectionWorkplace />
                        <SectionMeEmail /> 

                    </div>                   
                </DefaultTemplate> :
                <TemplateHomePage setIsOpen={setIsOpen}>                      
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}    
                    >

                       { cards[ currentCard ] }

                    </div>
                </TemplateHomePage>

            }
                {
                    isOpen ? 

                    <NavModal 
                        setIsOpen={setIsOpen}
                    /> : 
                    
                    null
                }
        </>
    )
}