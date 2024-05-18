import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { CardSkillCurriculum } from "./CardSkillCurriculum"


export const SectionSkillCurriculum = () => {
    const { skillList } = useContext(UserAdmContext)
      
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
                        skillList?.map((skill)=>{
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