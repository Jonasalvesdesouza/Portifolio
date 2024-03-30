import { createContext, useContext, useState } from 'react'
import { UserAdmContext } from './UserAdmContext'

export const ArticlesContext = createContext({})

export const ArticlesProvider = ({children}) =>{  
    const [ data, setData ] = useState({})
        
    return(
        <ArticlesContext.Provider value={{
            data, setData
        }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}