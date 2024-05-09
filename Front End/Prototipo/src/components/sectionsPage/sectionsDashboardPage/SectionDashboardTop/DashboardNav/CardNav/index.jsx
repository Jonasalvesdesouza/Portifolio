import { useContext } from "react"
import { Button } from "../../../../../fragments"
import { AppBehaviorContext } from "../../../../../../providers"

export const CardNav = ({ section }) => {
    const {

        setNavDashboard, 
        setIsOpenDashboard,

    } = useContext(AppBehaviorContext)

    
    
    const handleClick = () => {
        setNavDashboard(section.router)
        setIsOpenDashboard(false)
        localStorage.setItem("@SECTIONDASHBOARD", section.router)

    }

    return(
        <li>
            <Button
                onClick={handleClick}
            >
                { section.name }

            </Button>
        </li>
    )
}