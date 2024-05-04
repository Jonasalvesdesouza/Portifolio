import { useContext } from "react"
import  ImageJonas  from "../../../../../assets/JonasImage.svg"
import { UserAdmContext } from "../../../../../providers"

export const SectionTopLeftCurriclum = () => {
    const { profile } = useContext(UserAdmContext)

    const name = profile.userName?.toUpperCase()
    const profession = profile?.profession

    return(
        <div>
            <div>
                <h1>{name}</h1>
                <p>{profession}</p> 
            </div>
            <div>
                <img src={ImageJonas} alt="Image Jonas" />
            </div>
        </div>
    )
}