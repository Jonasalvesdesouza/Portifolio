import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardEducation } from "./CardEducation"

export const SectionEducationCurriculum = () => {
    const { user } = useContext(UserAdmContext)

    const schools = user.education

    return(
        <div>
            <div>
                <h4>
                    Education
                </h4>
            </div>
            <div>
                <ul>
                    {
                        schools?.map((school)=>{
                            return(
                                <CardEducation
                                    key={school.id}
                                    school={school} 
                                />
                            )
                        })                    
                    }
                </ul>
            </div>            
        </div>
    )
}