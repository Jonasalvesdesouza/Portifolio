import { useContext } from "react"

import { ArticlesContext } from "../../../../../providers"
import { CardArticleDatail } from "./CardArticleDatail"

export const RenderArticleDetail = () => {
    const { data } = useContext(ArticlesContext)

    const article = [data]

    return(
        <div>    
            <ul>
                {
                    article.map((object)=>{
                        return(
                            <CardArticleDatail
                                key={object.id}
                                object={object} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}