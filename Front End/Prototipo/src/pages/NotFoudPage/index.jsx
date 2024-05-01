import { useState } from "react"

import { DefaultTemplate } from "../../components/templade"
import { NavModal } from "../../components/fragments"

export const NotFoudPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <DefaultTemplate setIsOpen={setIsOpen} >
            <h1>NOT FOUT ERROR 404</h1>
            {
                isOpen ? <NavModal setIsOpen={setIsOpen} /> : null
            }
        </DefaultTemplate>
    )
}