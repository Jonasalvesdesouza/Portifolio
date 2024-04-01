import { useState } from "react"
import { Header, NavModal } from "../../components/fragments"
import { FormLoginPage } from "../../components/fragments/forms"

export const LoginPage = () => {
    const [ isOpen, setIsOpen] = useState()

    return(
        <div>
            <Header setIsOpen={setIsOpen} />
            <div>
                <FormLoginPage />
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </div>
    )
}