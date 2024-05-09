import { useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'

import { Button } from "../../../../../../fragments"

export const JobExperienceCard = ({jobExperience}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <li>
            <div>
                <h2>
                    {jobExperience.title}
                </h2>
                <div>
                    <span>
                        {jobExperience.CompanyName}
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