import { IoCloseOutline } from "react-icons/io5"

import { useKeydown, useOutclick, useRenderImage } from "../../../../../hooks"
import { Button } from "../../../Button"
import { FormArticleImage } from "../../../forms"
import { useContext, useEffect } from "react"
import { AppBehaviorContext } from "../../../../../providers"

export const ImageArtilceModal = ({article, setIsOpenInsertImage}) => {
    const { articleImage, setArticleImage } = useContext(AppBehaviorContext)

    const closeModalOutClick = useOutclick(()=> {
        setIsOpenInsertImage(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpenInsertImage(false)
    })
	
	const handleClick = () => {
		setIsOpenInsertImage(false)
        setArticleImage("")
    }

    useEffect(() => {
        const urlImage = useRenderImage(article)
        setArticleImage(urlImage)
    }, [article])
    
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
                <img 
                    src={articleImage} 
                    alt="Preview" 
                    style={{ maxWidth: '50%', marginTop: '10px' }} 
                />
            </div>
            <div>
                <FormArticleImage
                    setIsOpenInsertImage={setIsOpenInsertImage}
                />
            </div>

        </div>
    )
}
