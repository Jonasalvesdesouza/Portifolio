import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardHobbiesCurriculum } from "./CardHobbiesCurriculum"

export const SectionHobbiesCurriculum = () => {
    const { profile } = useContext(UserAdmContext)

    const hobbies = profile.hobby 
  
    return(
        <div>
             <div>
                <h4>
                    Hobbys
                </h4>
            </div>
            <ul>
                {
                    hobbies?.map((hobbie)=>{
                        return(
                            <CardHobbiesCurriculum
                                key={hobbie.id}
                                hobbie={hobbie} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
} 