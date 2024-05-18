import { IoCloseOutline } from "react-icons/io5"

import { useKeydown, useOutclick } from "../../../../../hooks"
import { Button } from "../../../Button"
import { FormEditEducation } from "../../../forms"

export const EditEducationModal = ({setIsOpen}) => {
    const closeModalOutClick = useOutclick(()=> {
        setIsOpen(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpen(false)
    })
	
	const handleClick = () => {
		return setIsOpen(false)
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
                <FormEditEducation
                    setIsOpen={setIsOpen}
                />
            </div>

        </div>
    )
}
