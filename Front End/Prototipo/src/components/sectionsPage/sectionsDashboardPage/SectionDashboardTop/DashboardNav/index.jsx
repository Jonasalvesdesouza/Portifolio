import { useContext } from "react"
import { Button } from "../../../../fragments"
import { AppBehaviorContext } from "../../../../../providers"

export const NavDashboard = () => {
    const { setNavDashboard } = useContext(AppBehaviorContext)

    return(
        <nav>
            <div>
                <Button
                    onClick={()=>{
                        setNavDashboard("projects")
                    }}
                >
                    Pojects
                </Button>
                <Button
                    onClick={()=>{
                        setNavDashboard("articles")
                    }}
                >
                    Articles
                </Button>
                <Button
                    onClick={()=>{
                        setNavDashboard("messages")
                    }}
                >
                    Messages
                </Button>
            </div>
        </nav>
    )
}