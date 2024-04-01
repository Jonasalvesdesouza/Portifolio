import { useState } from "react"

import { DefaultTemplade } from "../../components"
import { NavModal } from "../../components/fragments"

export const NotFoudPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <DefaultTemplade setIsOpen={setIsOpen} >
            <h1>NOT FOUT ERROR 404</h1>
            {
                isOpen ? <NavModal setIsOpen={setIsOpen} /> : null
            }
        </DefaultTemplade>
    )
}