import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardJobExperience } from "./CardJobExperience"

export const SectionJobExperienceCurriculum = () => {
    const { user } = useContext(UserAdmContext)

    const jobExperience = user.job_experience

    return(
        <div>
            <div>
                <h4>
                    Job Experience
                </h4>
            </div>
            <div>
                <ul>
                    {
                        jobExperience?.map((job)=>{
                            return(
                                <CardJobExperience
                                    key={job.id}
                                    job={job} 
                                />
                            )
                        })
                    }
                </ul>            
            </div>
        </div>
    )
}