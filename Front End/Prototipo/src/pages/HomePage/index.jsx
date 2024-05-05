import { useContext, useState, useRef, useEffect} from "react"

import { DefaultTemplate, TemplateHomePage } from "../../components/templade"
import { 

    SectionBannerHomePage,
    SectionAboutHomePage,
    SectionMeEmail,
    SectionWorkplace,

 } from "../../components/sectionsPage/sectionsHomePage"

import { NavModal } from "../../components/fragments"
import { AppBehaviorContext } from "../../providers"
import { useScreenWidth, useCardSwipe, useSwitchingsections } from "../../hooks"


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

    
   useSwitchingsections(cards)
    
    return(
        <>
            {
                screenWidth < 1  ?
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

                       {cards[currentCard]}

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