import { useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'

import { Button } from "../../../../../../fragments"

export const MessageCard = ({message}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <li>
            <div>
                <span>
                    {message.name}
                </span>
                <div>
                    <span>
                        {message.email}
                    </span>

                    <Button
                        onClick={()=>{
                            setIsOpen(true)
                            return
                        }}
                    >
                        <BiPencil
                            size={18}
                            color="#e8e9ea" 
                        />
                    </Button>

                    <Button
                        onClick={()=>{
                            return
                        }}
                    >
                        <BiTrash
                            size={18}
                            color="#e8e9ea" 
                        />
                    </Button>
                </div>
            </div>
        </li>
    )
}