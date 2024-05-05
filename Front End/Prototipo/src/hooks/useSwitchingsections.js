import { useContext, useEffect } from "react"
import { AppBehaviorContext } from "../providers/ApplicationBehavior"

export const useSwitchingsections = (cards) =>{
  const { sectionHomepage, setCurrentCard } = useContext(AppBehaviorContext)

  useEffect(() => {
    goToCard(sectionHomepage) 
  }, [sectionHomepage]) 

  const goToCard = (index) => {
    if (index >= 0 && index < cards.length) {
      setCurrentCard(index)
    }
  }

}