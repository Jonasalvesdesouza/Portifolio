import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardSkillCurriculum } from "./CardSkillCurriculum"


export const SectionSkillCurriculum = () => {
    const { profile } = useContext(UserAdmContext)

    const skills = profile.skill
      
    return(
        <div>
            <div>
                <h4>
                    Skills
                </h4>
            </div>
            <div>
                <ul>
                    {
                        skills?.map((skill)=>{
                            return(
                                <CardSkillCurriculum
                                    key={skill.id}
                                    skill={skill}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}