import { Link } from "react-router-dom"

import { 

    useCalculateReadingTime, 
    useFormtDate, 
    useLimitedDescription,
    useRenderImage, 
} from "../../../../../../hooks"


export const CardArticle = ({article}) => {
   
    const dateArticle = useFormtDate(article.updatedAt)
    
    const maxLength = 250
    const LimitedDescription = useLimitedDescription(article.description, maxLength)

    const timeText = useCalculateReadingTime(article.description)
    
    const handleClick = () => {
        localStorage.setItem("@IDARTICLE", article.id)
    }

    const urlImage = useRenderImage(article)
    
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
                            onClick={handleClick}
                        >
                            <h2>
                                {article.title}
                            </h2>
                        </Link>
                        <p dangerouslySetInnerHTML={{ __html: LimitedDescription }} />
                    </div>
                    <div>
                        <Link
                            to={"/articlepage"}
                            onClick={handleClick}
                        >
                            <img src={urlImage} alt={article.title} />
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
