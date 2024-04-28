import { IoCloseOutline } from "react-icons/io5"

import IconLinkedinYellow from "../../../../assets/IconLinkedinYellow.svg"
import IconLinkedinBalck from "../../../../assets/IconLinkedinBlack.svg"

import IconGitHubYellow from "../../../../assets/IconGitHubYellow.svg"
import IconGitHubBlack from "../../../../assets/IconGithubBlack.svg"

import { 
    ListNavHomePage, 
    ListNavDefault, 
    ListNavProjectsPage,
    ListNavBlogPage,
    ListNavCurriculumPage 
} from "./lists"

import { Button } from "../../Button"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../../providers"
import { useKeydown, useOutclick } from "../../../../hooks"

export const NavModal = ({ setIsOpen }) => {

    const { routeLocation } = useContext(AppBehaviorContext)

    const closeModalOutClick = useOutclick(()=> {
        setIsOpen(false)      
     })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpen(false)
     })
      

    const compareRoutesDefault = routeLocation === 
        "/" || 
        "/projects" || 
        "/blog" || 
        "/articles" || 
        "/curriculum" || 
        "/login"

    const compareRouteHomePage = routeLocation === "/"
    const compareRouteProjectsPage = routeLocation === "/projects"
    const compareRouteBlogPage = routeLocation === "/blog"
    const compareRouteAticlesPage = routeLocation === "/articlepage"
    const compareRouteCurriculumPage = routeLocation === "/curriculum"
    const compareRouteLoginPage = routeLocation === "/login"

    const colorIconClose = 
    compareRouteHomePage ||
    compareRouteAticlesPage ||
    compareRouteLoginPage  ? 
    "#e8e9ea" : "#1b1f24"
    
    const renderIconsGitHub =  
        compareRouteHomePage || 
        compareRouteAticlesPage || 
        compareRouteLoginPage ? 
        IconGitHubYellow : IconGitHubBlack

    const renderIconsLinkedin =  
    compareRouteHomePage || 
    compareRouteAticlesPage || 
    compareRouteLoginPage ? 
    IconLinkedinYellow : IconLinkedinBalck

    return(
        <div
            role="dialog"
            ref={closeModalOutClick}
        >
            <div>
                <Button onClick={() => {
                        return setIsOpen(false)
                    }}>
                    <IoCloseOutline
                        size={28}
                        color={colorIconClose}
                    />                    
                </Button>
            </div>
            <div>
                {   
                    !compareRoutesDefault ? <ListNavDefault /> :
                    compareRouteHomePage ? <ListNavHomePage /> : 
                    compareRouteProjectsPage ? <ListNavProjectsPage /> : 
                    compareRouteBlogPage ? <ListNavBlogPage /> : 
                    compareRouteCurriculumPage ? <ListNavCurriculumPage /> :  
                    compareRoutesDefault ? <ListNavDefault /> : null
                }
            </div>

            {
                <div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/jonas-alves-de-souza-61540b114/"
                            target="_blank"
                        >
                            <img src={renderIconsLinkedin} alt="Linkdin Icon" />
                        </a>
                    </div>
                   <div>
                        <a 
                            href="https://github.com/Jonasalvesdesouza"
                            target="_blank"
                        >
                            <img src={renderIconsGitHub} alt="GitHub Icon" />
                        </a>                                  
                    </div>
                </div>     
            }
        </div>
    )
}