import { useContext, useEffect, useState } from "react"
import { BiPencil, BiTrash } from 'react-icons/bi'

import {

    Button,
    EditArticleModal,
    ImageArtilceModal,
    ImageUpdateArticleModal

} from "../../../../../../fragments"

import { 

    useCalculateReadingTime, 
    useFormtDate, 
    useLimitedDescription,
    useRenderImage,
    useStateImage, 

} from "../../../../../../../hooks"

import { AppBehaviorContext, UserAdmContext } from "../../../../../../../providers"
import { InsertImage } from "./InsertImage"

export const ArticleCard = ({ article }) => {
    const [ articleImage, setArticleImage ] = useState("")
         
    const {

        setEditArticles, 
        articleDelete, 
        setArticle,

    } = useContext(UserAdmContext)

   
    const dateArticle = useFormtDate(article.updatedAt)
    const maxLength = 250
    const LimitedDescription = useLimitedDescription(article.description, maxLength)
    const timeText = useCalculateReadingTime(article.description)

    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const [ isOpenInsertImage, setIsOpenInsertImage ] = useState(false)
    const [ isOpenUpdateImage, setIsopenUpdateImage ] = useState(false)

    useEffect(() => {
        
        const urlImage = useRenderImage(article)
        setArticleImage(urlImage)
        
    }, [])
    
    const imageExists = useStateImage(article)
    
    return(
        <>
            <li>
                <div>
                    <span>
                        {dateArticle}
                    </span>
                    <div>
                        <div>
                            <h2>
                                {article.title}
                            </h2>
                            <p>
                                {LimitedDescription}
                            </p>
                        </div>
                        <div>
                        
                            <InsertImage
                                article={article}
                                imageExists={imageExists} 
                                setIsOpenInsertImage={setIsOpenInsertImage}
                                setIsopenUpdateImage={setIsopenUpdateImage} 
                                setArticle={setArticle} 
                                articleImage={articleImage}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>
                                {article.category}
                            </span> 
                        </div>
                        <div>
                            <span>
                                {"Reading time " + timeText + " minute"}
                            </span>
                        </div>
                    </div>

                    <div>
                        <Button
                            onClick={
                                ()=>{
                                    setIsOpen(true)
                                    setEditArticles(article)
                                }
                            }
                        >
                            <BiPencil
                                size={18}
                                color="black" 
                            />
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={
                                ()=>{
                                    articleDelete(article.id, setLoading)
                                }
                            }
                        >
                            {
                                loading? "Loading...":
                                <BiTrash
                                    size={18}
                                    color="black"
                                    /* color="#e8e9ea" */ 
                                />
                            }
                        </Button>
                    </div>
                </div>
            </li>

            {
                isOpen === true ?
                <EditArticleModal
                    setIsOpen={setIsOpen} 
                />:
                null
            }
            {
                isOpenInsertImage === true ?
                <ImageArtilceModal
                    setIsOpenInsertImage={setIsOpenInsertImage} 
                    article={article} 
                /> :
                null
            }

            {
                isOpenUpdateImage === true ?
                <ImageUpdateArticleModal
                    article={article} 
                    setIsopenUpdateImage={setIsopenUpdateImage}
                /> :
                null
            }
        </>
    )
}
