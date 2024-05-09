import { IoCloseOutline } from "react-icons/io5"

import { 

    useKeydown, 
    useOutclick, 
    useRenderImage 

} from "../../../../../hooks"

import { Button } from "../../../Button"
import { FormUpdateProjectImage } from "../../../forms"

export const ImageUpdateProjectModal  = ({setIsopenUpdateImage, project}) => {
    const closeModalOutClick = useOutclick(()=> {
        setIsopenUpdateImage(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsopenUpdateImage(false)
    })
	    
    const urlImage = useRenderImage(project)


    return(
        <div

			role="dialog"
			ref={closeModalOutClick}

		>
			<div>
                <Button onClick={
                    () => {
                        setIsopenUpdateImage(false)
                    }
                }>

                    <IoCloseOutline
                        size={28}
                        color="#1b1f24"
                    />

                </Button>
            </div>
            <div>
                <img src={urlImage} alt={`${project.title}`} />
            </div>
            <div>
                <FormUpdateProjectImage 
                    setIsopenUpdateImage={setIsopenUpdateImage}
                />
            </div>

        </div>
    )
}
