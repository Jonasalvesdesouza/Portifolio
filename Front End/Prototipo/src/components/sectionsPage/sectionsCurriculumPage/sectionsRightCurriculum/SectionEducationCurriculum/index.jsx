import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardEducation } from "./CardEducation"

export const SectionEducationCurriculum = () => {
    const { education } = useContext(UserAdmContext)

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
                        education?.map((school)=>{
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