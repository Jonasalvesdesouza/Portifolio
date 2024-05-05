import { useContext } from "react"
import { SectionDashboardArticles } from "./SectionDashboardArticles"
import { SectionDashboardProjects } from "./SectionDashboardProjects"
import { SectionDashboardMessage } from "./SectionDashboardMessage"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"

export const SectionRenderMiddleDashboard = () => {
    const { user } = useContext(UserAdmContext)
    const { navDashboard } = useContext(AppBehaviorContext)

    return(
        <div>
            {
                navDashboard === "projects"? 
                <SectionDashboardProjects /> : 
                navDashboard === "articles"?
                <SectionDashboardArticles /> :
                navDashboard === "messages"?
                <SectionDashboardMessage />:
                <h3>
                    Seja bem vindo {user.name}
                </h3>
            }
    
        </div>
    )
}