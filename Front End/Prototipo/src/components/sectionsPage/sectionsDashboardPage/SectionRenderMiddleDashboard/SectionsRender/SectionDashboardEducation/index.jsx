import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { EducationCard } from "./EducationCard"

export const SectionDashboardEducation = () => {

    const { education } = useContext(UserAdmContext)
       
    return(
        <div>
            <h2>Education.</h2>
            <ul>
                {
                    education?.map((education)=>{
                        return(
                            <EducationCard
                                key={education.id}
                                education={education} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}