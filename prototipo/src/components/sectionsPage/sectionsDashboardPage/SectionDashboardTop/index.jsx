import { Button } from "../../../fragments"
import { NavDashboard } from "./DashboardNav"

export const SectionTopDashboard = () => {
    return(
        <div>
            <div>
                <NavDashboard />
                <div>
                    <Button
                        onClick={()=>{
                        }}
                    >
                        ADD
                    </Button>
                </div>               
            </div>
        </div>
    )
}