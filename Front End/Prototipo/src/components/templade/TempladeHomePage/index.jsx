import { TemplateMobile } from "./TemplateeMobile"
import { TemplateDefault } from "./TemplateDefault"
import { useScreenWidth } from "../../../hooks"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../providers"

export const TemplateHomePage = ({children, setIsOpen}) => {
    const { screenWidth } = useContext(AppBehaviorContext)

    useScreenWidth()
    
    return(
        
        <div>
            {

                screenWidth < 850 ? 
                <TemplateMobile setIsOpen={setIsOpen} children={children} /> : 
                <TemplateDefault setIsOpen={setIsOpen} children={children} />
                
            }
        </div>
    )
}