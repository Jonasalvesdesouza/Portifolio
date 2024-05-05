import { useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'

import { Button } from "../../../../../fragments"

export const MessageCard = ({message}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <li>
            <div>
                <h2>
                    {message.name}
                </h2>
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