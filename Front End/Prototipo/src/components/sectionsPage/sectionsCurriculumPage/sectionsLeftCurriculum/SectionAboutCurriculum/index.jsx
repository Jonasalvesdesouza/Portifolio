import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"

export const SectionAboutCurriculum = () => {
    const { profile } = useContext(UserAdmContext)

    return(
        <div>
            <h2>About.</h2>
            <p>{profile.about}</p>
        </div>
    )
}