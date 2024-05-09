import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { ArticleCard } from "./ArticleCard" 

export const SectionDashboardArticles = () =>{

    const { articlesList } = useContext(UserAdmContext)

    
    return(
        <div>
            <h2>
                Article.
            </h2>
            <ul>
                {
                    articlesList?.map((article)=>{
                        return(
                            <ArticleCard
                                key={article.id}
                                article={article} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}
