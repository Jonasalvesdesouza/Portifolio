import { createContext, useState } from "react"
import { useLocation } from "react-router-dom"

export const AppBehaviorContext = createContext({})

export const AppBehaviorProvider = ({children}) =>{
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)

    const [ currentCard, setCurrentCard ] = useState(0)

    const location = useLocation().pathname.toLocaleLowerCase()
    const [ routeLocation, setRouteLocation ] = useState("")

    const [ search, setSearch ] = useState("")
    const [ categorysProject, setCategorysProject ] = useState("")
    const [ categorysArticles, setCategorysArticles ] = useState("")

    const [ imageStade, setImageStade ] = useState(false)

    const [ navDashboard, setNavDashboard ] = useState(null)

    const [ isOpenDashboard, setIsOpenDashboard ] = useState(false)

    const resetStadeCategorys = () =>{
        setCategorysArticles("")
        setCategorysProject("")
    }
    
    return(
        <AppBehaviorContext.Provider value={
            {

                screenWidth, 
                setScreenWidth,
                currentCard, 
                setCurrentCard,
                location,
                routeLocation, 
                setRouteLocation,
                search, 
                setSearch,
                categorysProject, 
                setCategorysProject,
                categorysArticles, 
                setCategorysArticles,
                resetStadeCategorys,
                imageStade, 
                setImageStade,
                navDashboard, 
                setNavDashboard,
                isOpenDashboard, 
                setIsOpenDashboard
            
            }
        }>
            {children}
        </AppBehaviorContext.Provider>
    )
}