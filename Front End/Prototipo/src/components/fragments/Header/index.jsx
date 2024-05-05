import YellowLogo from "../../../assets/YellowLogo.svg"
import BlackLogo from "../../../assets/BlackLogo.svg"

import BlackNavIcon from "../../../assets/BlackNav.svg"
import WhiteNavIcon from "../../../assets/WhiteNav.svg"

import { Button } from "../Button"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../providers"

export const Header = ({ setIsOpen }) => {

    const { 

        location, 
        setRouteLocation, 
        setSectionHomepage 

    } = useContext(AppBehaviorContext)

    const compareRoutes = 
        location === "/projects" || 
        location === "/blog"  

    const CompareRouteCurriculum = location === "/curriculum" || "/"

    
    return(
        <header>
            <div>
                <div>
                    {
                        compareRoutes ? 
                            <Link to={"/"}>
                                <img src={BlackLogo} alt="Black Logo" />
                            </Link> 

                            :

                            <Link to={"/"}>
                                <img src={YellowLogo} alt="Yellow Logo" />
                            </Link>
                    }
                </div>
                <div>
                    {
                        <Button 
                            onClick={() => {
                                setIsOpen(true)
                                setRouteLocation(location)
                                setSectionHomepage(0)
                            }}
                        >   
                           {    
                                CompareRouteCurriculum ? 
                                <img src={BlackNavIcon} alt="Black NavIcon" />
                                    :
                                compareRoutes ?
                                <img src={BlackNavIcon} alt="Black NavIcon" />
                                    :
                                <img src={WhiteNavIcon} alt="White NavIcon" />
                                    
                           } 
                        </Button>
                    }
                </div>
            </div>
        </header>
    )
}