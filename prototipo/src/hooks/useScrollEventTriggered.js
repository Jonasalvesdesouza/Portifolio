import { useContext, useEffect } from "react"
import { AppBehaviorContext } from "../providers"

export const useScrollEventTriggered = () => {

    const { setScrollEventTriggered } = useContext(AppBehaviorContext)

 
    useEffect(() => {
        const handleScroll = () => {
            setScrollEventTriggered(true)
            
            setTimeout(() => {
                setScrollEventTriggered(false)
            }, 100)
        }

        window.addEventListener("wheel", handleScroll)
        window.addEventListener("touchmove", handleScroll)

        return () => {
            window.removeEventListener("wheel", handleScroll)
            window.removeEventListener("touchmove", handleScroll)
        }
    }, [])

}