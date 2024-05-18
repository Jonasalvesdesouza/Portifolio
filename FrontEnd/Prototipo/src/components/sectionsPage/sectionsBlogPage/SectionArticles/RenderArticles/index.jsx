import { CardArticle } from "./CardArticle"

export const RenderArticles = ({search, articlesResult}) => {
      return(
        <div>
            <span>Listed articles: {articlesResult.length}</span>
            {search ? <p>Search results for: {search}</p> : null}
            <ul>
                {
                    articlesResult.length > 0 ? 
                        (
                            articlesResult.map((article)=>{
                                return(
                                    <CardArticle
                                        key={article.id}
                                        article={article} 
                                    />
                                )
                            })    
                        ) : 
                        (
                            <p>No results found</p>
                        )
                } 
            </ul>
        </div>
    )
}