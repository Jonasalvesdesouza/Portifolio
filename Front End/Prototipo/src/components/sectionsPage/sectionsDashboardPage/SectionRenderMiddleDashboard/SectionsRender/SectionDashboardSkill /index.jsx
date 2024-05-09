import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { SkillCard } from "./SkillCard"

export const SectionDashboardSkill = () => {

    const { profile } = useContext(UserAdmContext)

    const skills = profile?.skill  
       
    return(
        <div>
            <h2>Skill.</h2>
            <ul>
                {
                    skills?.map((skill)=>{
                        return(
                            <SkillCard
                                key={skill.id}
                                skill={skill} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}