import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { JobExperienceCard } from "./JobExperienceCard"

export const SectionDashboardJobExperience = () => {

    const { jobExperience } = useContext(UserAdmContext)
       
    return(
        <div>
            <h2>JobExperience.</h2>
            <ul>
                {
                    jobExperience?.map((jobExperience)=>{
                        return(
                            <JobExperienceCard
                                key={jobExperience.id}
                                jobExperience={jobExperience} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}