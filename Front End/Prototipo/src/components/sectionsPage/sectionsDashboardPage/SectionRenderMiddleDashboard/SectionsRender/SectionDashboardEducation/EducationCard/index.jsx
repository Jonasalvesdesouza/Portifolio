import { useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'

import { Button } from "../../../../../../fragments"

export const EducationCard = ({education}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <li>
            <div>
                <h2>
                    {education.title}
                </h2>
                <div>
                    <span>
                        {education.course}
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