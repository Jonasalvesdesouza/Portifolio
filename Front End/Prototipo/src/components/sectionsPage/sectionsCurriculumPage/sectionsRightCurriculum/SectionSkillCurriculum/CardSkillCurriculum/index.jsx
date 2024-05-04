import { IconsSkills } from "../../../../../../data"

export const CardSkillCurriculum = ({skill}) => {

    const skillName = skill.name

    const iconObj = IconsSkills.find(icon => icon.name === skill.name)
    const iconComponent = iconObj ? iconObj.icon : null
   

    return(
        <li>
            <div>
                <div>
                    <span>{skillName}</span>                
                </div>
                <div>
                    <span>{iconComponent}</span>
                </div>    
            </div>
        </li>
    )
}