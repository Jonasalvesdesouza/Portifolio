import { useState } from "react"

import { HeaderDashboard } from "../../components/fragments/HeaderDashboard"
import { 
    SectionRenderMiddleDashboard, 
    SectionTopDashboard 
} from "../../components/sectionsPage/sectionsDashboardPage"

export const DashboardPage = () => {
    const [ isOpen, setIsOpen ] = useState()
    
    return(
        <div>
            <HeaderDashboard />
            <SectionTopDashboard />
            <SectionRenderMiddleDashboard/>
        </div>
    )
}