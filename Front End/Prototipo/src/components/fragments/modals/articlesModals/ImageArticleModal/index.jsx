import { IoCloseOutline } from "react-icons/io5"

import { useKeydown, useOutclick, useRenderImage } from "../../../../../hooks"
import { Button } from "../../../Button"
import { FormArticleImage } from "../../../forms"
import { useContext, useEffect, useState } from "react"
import { AppBehaviorContext } from "../../../../../providers"

export const ImageArtilceModal = ({article, setIsOpenInsertImage}) => {
    const { imageArticle } = useContext(AppBehaviorContext)
    const [ articleImage, setArticleImage ] = useState("")

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
        if (imageArticle) {
            setArticleImage(imageArticle)
        } else {
            const urlImage = useRenderImage(article)
            setArticleImage(urlImage)
        }
    }, [article, imageArticle])
    
    return(
        <div

			role="dialog"
			ref={closeModalOutClick}

		>
            <h4>Inserir umagem</h4>
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
