import { useContext, useEffect} from "react"
import { AppBehaviorContext } from "../providers/ApplicationBehavior"

export const useScrollToSection = () => {
    const { 

        lastScrollPosition, 
        setScrollDirection 

    } = useContext(AppBehaviorContext)

    useEffect(() => {

        const handleWheel = (event) => {
            const deltaY = event.deltaY
            if (deltaY > 0) {
              setScrollDirection("down")
            } else if (deltaY < 0) {
              setScrollDirection("up")
            }
            setTimeout(() => {
                setScrollDirection("")
            }, 100)
          }
      
          const handleTouchMove = (event) => {
            const touchY = event.touches[0].clientY
            const prevTouchY = event.touches[0].clientY - event.touches[0].clientY
            if (touchY > prevTouchY) {
              setScrollDirection("down")
            } else if (touchY < prevTouchY) {
              setScrollDirection("up")
            }
            setTimeout(() => {
                setScrollDirection("")
            }, 100)
          }

            window.addEventListener("wheel", handleWheel)
            window.addEventListener("touchmove", handleTouchMove)

        return () => {
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("touchmove", handleTouchMove)
        }
    }, [lastScrollPosition])
    

    
}