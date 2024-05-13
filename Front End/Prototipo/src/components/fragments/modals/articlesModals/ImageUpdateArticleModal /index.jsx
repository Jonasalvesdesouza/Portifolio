import { IoCloseOutline } from "react-icons/io5"

import { 

    useKeydown, 
    useOutclick, 

} from "../../../../../hooks"

import { Button } from "../../../Button"
import { FormUpdateArticleImage } from "../../../forms"
import { useContext, useEffect } from "react"
import { AppBehaviorContext } from "../../../../../providers"

export const ImageUpdateArticleModal  = ({setIsopenUpdateImage, article}) => {
    const { imageArticle } = useContext(AppBehaviorContext)

    console.log(imageArticle)

    const closeModalOutClick = useOutclick(()=> {
        setIsopenUpdateImage(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsopenUpdateImage(false)
    })

    return(
        <div

			role="dialog"
			ref={closeModalOutClick}

		>
			<div>
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
                    <h4>Update Image</h4>
                </div>
            </div>
            <div>
                <img 
                    src={imageArticle} 
                    alt="Preview" 
                    style={{ maxWidth: '100%', marginTop: '10px' }} 
                />
            </div>
            <div>
                <FormUpdateArticleImage
                    setIsopenUpdateImage={setIsopenUpdateImage}
                    article={article}
                />
            </div>

        </div>
    )
}
