import { useContext } from "react"
import { Link } from "react-router-dom"

import { 

    useCalculateReadingTime, 
    useFormtDate, 
    useLimitedDescription, 
    useSaveArticlePageRender 

} from "../../../../../../hooks"

import { ArticlesContext, UserAdmContext } from "../../../../../../providers"

export const CardArticle = ({article}) => {
    const { setData, setIdArticle } = useContext(ArticlesContext)

    const dateArticle = useFormtDate(article)
    
    const maxLength = 250
    const LimitedDescription = useLimitedDescription(article.description, maxLength)

    const timeText = useCalculateReadingTime(article.description)
    

    return(
        <li>
            <div>
                <span>
                    {dateArticle}
                </span>
                <div>
                    <div>
                        <Link
                            to={"/articlepage"}
                            onClick={()=>{
                                localStorage.setItem("@IDARTICLE", article.id)
                            }}
                        >
                            <h2>
                                {article.title}
                            </h2>
                        </Link>
                        <p>
                            {LimitedDescription}
                        </p>
                    </div>
                    <div>
                        <Link
                            to={"/articlepage"}
                            onClick={()=>{
                                useSaveArticlePageRender(article, setData)
                            }}
                        >
                            <img src={article.image} alt={article.title} />
                        </Link>
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
            </div>
        </li>
    )
}
