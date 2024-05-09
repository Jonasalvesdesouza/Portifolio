import { useContext } from "react"
import { Button } from "../../../fragments"
import { DashboardNav } from "./DashboardNav"
import { AppBehaviorContext } from "../../../../providers"

export const SectionTopDashboard = () => {
    const { setIsOpenDashboard } = useContext(AppBehaviorContext)

    const handleClick = () => {
        setIsOpenDashboard(true)
    }
    
    const sectionDashboard = localStorage.getItem("@SECTIONDASHBOARD") 

    return(
        <div>
            <div>
                <DashboardNav />
                <div>
                    {
                        sectionDashboard == 7 ? null:
                        <Button
                            onClick={ handleClick }
                        >
                            ADD
                        </Button>

                    }
                </div>               
            </div>
        </div>
    )
}