import { useContext, useEffect } from "react"
import { AppBehaviorContext } from "../providers"

export const useGoToNextSection = (sectionDown, sectionUp) =>{
    const {

        scrollEventTriggered, 
        scrollDirection, 
        setSectionHomepage
        
    } = useContext(AppBehaviorContext)
        
    useEffect(() => {
        const goToNextSection = () => {
            if (scrollEventTriggered === true) {
                if (scrollDirection === "down") {
                    setTimeout(() => {
                        setSectionHomepage(sectionDown)
                    }, 300)
                }else if (scrollDirection === "up") {
                    setTimeout(() => {
                        setSectionHomepage(sectionUp)
                    }, 300)

                }
            }
        };

        goToNextSection()
    }, [

        scrollEventTriggered, 
        scrollDirection, 
        setSectionHomepage

    ])
    
}