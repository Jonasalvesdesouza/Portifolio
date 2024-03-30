import { SectionEducationCurriculum } from "./SectionEducationCurriculum"
import { SectionHobbiesCurriculum } from "./SectionHobbiesCurriculum"
import { SectionJobExperienceCurriculum } from "./SectionJobExperienceCurriculum"
import { SectionSkillCurriculum } from "./SectionSkillCurriculum"

export const SectionRightCurriculum = () => {
    
    return(
        <div>
            <SectionJobExperienceCurriculum />
            <SectionSkillCurriculum />
            <SectionEducationCurriculum />
            <SectionHobbiesCurriculum />
        </div>
    )
}