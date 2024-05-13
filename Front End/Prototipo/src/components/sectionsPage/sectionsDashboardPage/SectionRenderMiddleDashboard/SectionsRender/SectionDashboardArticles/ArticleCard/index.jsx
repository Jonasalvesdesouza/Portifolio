import ImageDefault from "../../../../../../../assets/DefaultImage.ai.svg"

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

} from "../../../../../../../hooks"

import { AppBehaviorContext, UserAdmContext } from "../../../../../../../providers"
import { InsertImage } from "./InsertImage"
import { ConfigServerUrl } from "../../../../../../../config"

export const ArticleCard = ({ article }) => {
    const { setImageArticle } = useContext(AppBehaviorContext)
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
        const imageRender = () => {
            if (!article.image) {
                return ImageDefault
            } else {
                const imagePath = article.image.path;
                const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1)
                const serverUrl = ConfigServerUrl;
                return `${serverUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`
            }
        }

        const imageUrl = imageRender()
        setArticleImage(imageUrl)
    }, [article])

    
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
                            <p dangerouslySetInnerHTML={{ __html: LimitedDescription }} />
                        </div>
                        <div>
                        
                            <InsertImage
                                article={article}
                                setIsOpenInsertImage={setIsOpenInsertImage}
                                setIsopenUpdateImage={setIsopenUpdateImage} 
                                setArticle={setArticle} 
                                articleImage={articleImage}
                                setImageArticle={setImageArticle}
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
