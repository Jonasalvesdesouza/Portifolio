import { useContext, useEffect, useState } from "react"
import { AppBehaviorContext } from "../providers"

export const useStateImage = (object) => {
    const [hasImage, setHasImage] = useState(false)
    const { stateImage } = useContext(AppBehaviorContext)

    if (object.image == null || false || undefined) {
        return false
    }else{
        return true
    }

}
