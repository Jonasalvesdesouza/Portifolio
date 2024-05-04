import { useContext } from "react"

import YellowLogo from "../../../assets/YellowLogo.svg"

import { Button } from "../Button"
import { UserAdmContext } from "../../../providers"

export const HeaderDashboard = () =>{
    const { userLogout } = useContext(UserAdmContext)
     
    return(
        <header>
            <div>
                <img src={YellowLogo} alt="Logo Jonas" />
            </div>
            <div>
               <Button >
                    Edit Profile
               </Button>

               <Button onClick={userLogout}>
                    Logout
               </Button>
            </div>
        </header>
    )
}