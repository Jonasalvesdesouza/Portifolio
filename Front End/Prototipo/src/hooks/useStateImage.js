import { useContext, useEffect, useState } from "react"
import { AppBehaviorContext } from "../providers"

export const useStateImage = (project) => {
    const [hasImage, setHasImage] = useState(false)
    const { stateImage } = useContext(AppBehaviorContext)
    
    useEffect(() => {
        if (project && project.image) {
            setHasImage(true)
        } else {
            setHasImage(false)
        }
    }, [])

    if (hasImage == false && stateImage == true) {
        return true
    }if (hasImage == true && stateImage == false) {
        return true
    }if ( hasImage == true && stateImage == true ) {
        return true
    }else{
        return false
    }

}
