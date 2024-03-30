import { SectionAboutCurriculum } from "./SectionAboutCurriculum"
import { SectionContactCurriculum } from "./SectionContactCurriculum"
import { SectionSocialMidiaCurriculum } from "./SectionSocialMidiaCurriculum"
import { SectionTopLeftCurriclum } from "./SectionTopLeftCurriclum"

export const SectionLeftCurriculum = () => {
   return(
        <div>
            <SectionTopLeftCurriclum />
            <SectionAboutCurriculum />
            <SectionContactCurriculum />
            <SectionSocialMidiaCurriculum />            
        </div>
   )
}