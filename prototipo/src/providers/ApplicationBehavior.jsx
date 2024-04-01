import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const AppBehaviorContext = createContext({})

export const AppBehaviorProvider = ({children}) =>{
    const location = useLocation().pathname.toLocaleLowerCase()
    const [ routeLocation, setRouteLocation ] = useState()

    const [ search, setSearch ] = useState("")
    const [ categorysProject, setCategorysProject ] = useState("")
    const [ categorysArticles, setCategorysArticles ] = useState("")

    const resetStadeCategorys = () =>{
        setCategorysArticles("")
        setCategorysProject("")
    }
    
    return(
        <AppBehaviorContext.Provider value={{
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