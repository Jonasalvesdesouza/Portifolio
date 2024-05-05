import { useContext } from "react"
import { UserAdmContext } from "../../../../../providers"
import { ArticleCard } from "./ArticleCard" 

export const SectionDashboardArticles = () =>{

    const { articlesList } = useContext(UserAdmContext)

    
    return(
        <div>
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
