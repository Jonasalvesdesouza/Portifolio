import { useEffect, useRef } from 'react'

export const useKeydown = (callback) => {
    const ref = useRef(null)

    useEffect( 
        ()=>{
            const handleKeydown = (event) =>{
                if(event.key === 'Escape'){
                    if(callback){
                        callback(ref.current)
                    }  
                }
            }

            window.addEventListener('keydown', handleKeydown)

            return () => {
                window.removeEventListener('keydown', handleKeydown)
            }
        },
        [callback] )

    return ref
}