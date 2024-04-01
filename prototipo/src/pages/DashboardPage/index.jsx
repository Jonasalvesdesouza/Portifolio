import { useState } from "react"

import { HeaderDashboard } from "../../components/fragments/HeaderDashboard"

export const DashboardPage = () => {
    const [ isOpen, setIsOpen ] = useState()
    
    return(
        <div>
            <HeaderDashboard />
            <div>
                
            </div>
        </div>
    )
}