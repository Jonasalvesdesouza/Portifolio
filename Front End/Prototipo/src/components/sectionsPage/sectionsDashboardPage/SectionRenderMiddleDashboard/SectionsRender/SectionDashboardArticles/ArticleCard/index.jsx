import { useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'

import { Button } from "../../../../../../fragments"

export const ArticleCard = ({article}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <li>
            <div>
                <span>
                    {article.name}
                </span>
                <div>
                    <span>
                        {article.category}
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