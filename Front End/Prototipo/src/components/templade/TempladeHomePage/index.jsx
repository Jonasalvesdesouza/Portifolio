import { TemplateMobile } from "./TemplateeMobile"
import { TemplateDefault } from "./TemplateDefault"
import { useScreenWidth } from "../../../hooks"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../providers"
import { middleResolution } from "../../../config"

export const TemplateHomePage = ({children, setIsOpen}) => {
    const { screenWidth } = useContext(AppBehaviorContext)

    useScreenWidth()
    
    return(
            

        <div>
            {

                screenWidth < middleResolution ? 
                <TemplateMobile setIsOpen={setIsOpen} children={children} /> : 
                <TemplateDefault setIsOpen={setIsOpen} children={children} />
                
            }
        </div>
    )
}