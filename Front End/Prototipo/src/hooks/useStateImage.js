import { useContext } from "react"
import { AppBehaviorContext } from "../providers"

export const useStateImage = (project) => {
    const { imageStade } = useContext(AppBehaviorContext)
    const imageIsopen = () =>{
        if (project.image == null && imageStade == false) {
            return false
        }if (project.image && imageStade == true) {
            return true
        }else{
            return true
        }
    }

    return imageIsopen()
}