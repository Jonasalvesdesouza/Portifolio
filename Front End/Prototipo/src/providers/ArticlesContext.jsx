import { createContext, useContext, useState } from "react"
import { UserAdmContext } from "./UserAdmContext"

export const ArticlesContext = createContext({})

export const ArticlesProvider = ({children}) =>{     
    const [ idArticle, setIdArticle ] = useState()
        
    return(
        <ArticlesContext.Provider value={{
            idArticle, 
            setIdArticle
        }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}