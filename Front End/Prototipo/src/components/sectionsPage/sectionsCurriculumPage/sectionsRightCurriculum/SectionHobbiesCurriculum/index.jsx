import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardHobbiesCurriculum } from "./CardHobbiesCurriculum"

export const SectionHobbiesCurriculum = () => {
    const { hobbyList } = useContext(UserAdmContext)
 
    return(
        <div>
             <div>
                <h4>
                    Hobbys
                </h4>
            </div>
            <ul>
                {
                    hobbyList?.map((hobbie)=>{
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