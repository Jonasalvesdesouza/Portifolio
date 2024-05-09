import { IoCloseOutline } from "react-icons/io5"

import { useKeydown, useOutclick } from "../../../../../hooks"
import { Button } from "../../../Button"
import { FormUpdateProjectImage } from "../../../forms"

export const ImageUpdateProjectModal  = ({setIsopenUpdateImage}) => {
    const closeModalOutClick = useOutclick(()=> {
        setIsopenUpdateImage(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsopenUpdateImage(false)
    })
	
	const handleClick = () => {
		return setIsopenUpdateImage(false)
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
                <FormUpdateProjectImage 
                    setIsopenUpdateImage={setIsopenUpdateImage}
                />
            </div>

        </div>
    )
}
