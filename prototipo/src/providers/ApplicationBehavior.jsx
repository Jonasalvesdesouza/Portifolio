import { createContext, useState } from "react"
import { useLocation } from "react-router-dom"

export const AppBehaviorContext = createContext({})

export const AppBehaviorProvider = ({children}) =>{
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)

    const [ sectionHomepage, setSectionHomepage ] = useState("")
    const [ scrollDirection, setScrollDirection ] = useState("")
    const [ lastScrollPosition, setLastScrollPosition ] = useState(0)
    const [ scrollEventTriggered, setScrollEventTriggered ] = useState(false)
    
    const location = useLocation().pathname.toLocaleLowerCase()
    const [ routeLocation, setRouteLocation ] = useState("")

    const [ search, setSearch ] = useState("")
    const [ categorysProject, setCategorysProject ] = useState("")
    const [ categorysArticles, setCategorysArticles ] = useState("")

    const resetStadeCategorys = () =>{
        setCategorysArticles("")
        setCategorysProject("")
    }
    
    return(
        <AppBehaviorContext.Provider value={{
            screenWidth, 
            setScreenWidth,
            sectionHomepage, 
            setSectionHomepage,
            scrollDirection, 
            setScrollDirection,
            lastScrollPosition, 
            setLastScrollPosition,
            scrollEventTriggered, 
            setScrollEventTriggered,
            location,
            routeLocation, 
            setRouteLocation,
            search, 
            setSearch,
            categorysProject, 
            setCategorysProject,
            categorysArticles, 
            setCategorysArticles,
            resetStadeCategorys 
        }}>
            {children}
        </AppBehaviorContext.Provider>
    )
}