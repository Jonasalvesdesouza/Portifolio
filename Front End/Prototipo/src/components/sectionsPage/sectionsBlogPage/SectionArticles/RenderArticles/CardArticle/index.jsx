import { Link } from "react-router-dom"

import { 

    useCalculateReadingTime, 
    useFormtDate, 
    useLimitedDescription, 
} from "../../../../../../hooks"


export const CardArticle = ({article}) => {
   
    const dateArticle = useFormtDate(article)
    
    const maxLength = 250
    const LimitedDescription = useLimitedDescription(article.description, maxLength)

    const timeText = useCalculateReadingTime(article.description)
    
    const handleClick = () => {
        localStorage.setItem("@IDARTICLE", article.id)
    }
    
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
                        <p>
                            {LimitedDescription}
                        </p>
                    </div>
                    <div>
                        <Link
                            to={"/articlepage"}
                            onClick={handleClick}
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
