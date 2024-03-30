import { useContext } from 'react'
import { UserAdmContext } from '../../../../providers'
import { CardSkillCurriculum } from './CardSkillCurriculum'


export const SectionSkillCurriculum = () => {
    const { user } = useContext(UserAdmContext)

    const skills = user.skills
      
    return(
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
    )
}