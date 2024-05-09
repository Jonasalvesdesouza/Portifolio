import { IoCloseOutline } from "react-icons/io5"
import { BiPencil, BiTrash } from 'react-icons/bi'

import { useKeydown, useOutclick } from "../../../../../hooks"
import { Button } from "../../../Button"
import { FormProjectImage } from "../../../forms"

export const ImageProjectModal = ({setIsOpenInsertImage}) => {
    const closeModalOutClick = useOutclick(()=> {
        setIsOpenInsertImage(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpenInsertImage(false)
    })
	
	const handleClick = () => {
		return setIsOpenInsertImage(false)
    }
    
    return(
        <div

			role="dialog"
			ref={closeModalOutClick}

		>
			<div>
                <Button onClick={ handleClick }>

                    <IoCloseOutline
                        size={28}
                        color="#1b1f24"
                    />

                </Button>
            </div>
            <div>
                <FormProjectImage
                    setIsOpenInsertImage={setIsOpenInsertImage}
                >
                </FormProjectImage>
            </div>

        </div>
    )
}
