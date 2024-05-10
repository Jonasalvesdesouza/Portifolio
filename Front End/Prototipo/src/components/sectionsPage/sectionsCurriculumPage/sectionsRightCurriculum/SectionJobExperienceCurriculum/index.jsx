import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardJobExperience } from "./CardJobExperience"

export const SectionJobExperienceCurriculum = () => {
    const { jobExperienceList } = useContext(UserAdmContext)

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
                        jobExperienceList?.map((job)=>{
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