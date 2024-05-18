import { useContext, useState } from "react"
import { HobbyButtons } from "./HobbyButtons"
import { UserAdmContext } from "../../../../../../../providers"
import { EditHobbyModal } from "../../../../../../fragments"

export const HobbyCard = ({hobby}) => {
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const {

        setEditHobby, 
        hobbyDelete, 

    } = useContext(UserAdmContext)

    return(
        <>
            <li>
                <div>
                    <span>
                        {hobby.name}
                    </span>

                    <HobbyButtons

                        hobby={hobby} 
                        setIsOpen={setIsOpen} 
                        setEditHobby={setEditHobby} 
                        hobbyDelete={hobbyDelete} 
                        setLoading={setLoading}
                        loading={loading} 

                    />

                </div>
            </li>
            {
                isOpen === true ?
                <EditHobbyModal
                    setIsOpen={setIsOpen} 
                />:
                null
            }
        </>
    )
}