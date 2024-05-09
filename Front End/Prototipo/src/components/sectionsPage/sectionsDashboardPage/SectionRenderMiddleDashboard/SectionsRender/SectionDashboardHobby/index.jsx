import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { HobbyCard } from "./HobbyCard"

export const SectionDashboardHobby = () => {

    const { profile } = useContext(UserAdmContext)

    const hobbys = profile?.hobby

    console.log()
    
       
    return(
        <div>
            <h2>Hobby.</h2>
            <ul>
                {
                    hobbys?.map((hobby)=>{
                        return(
                            <HobbyCard
                                key={hobby.id}
                                hobby={hobby} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}