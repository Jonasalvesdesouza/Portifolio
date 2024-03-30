import { useContext } from 'react'
import { FilterCategoryArticles } from './FilterCategoryArticles'
import { AppBehaviorContext, UserAdmContext } from '../../../providers'
import { useArticlesSearch } from '../../../hooks'
import { RenderArticles } from './RenderArticles'

export const SectionAticles = () => {
    const { search } = useContext(AppBehaviorContext)
    const { articlesList } = useContext(UserAdmContext)

    const articlesResult = useArticlesSearch(articlesList, search)
    
    return(
        <div>
            <FilterCategoryArticles />
            <RenderArticles
                search={search}
                articlesResult={articlesResult} 
            />
        </div>
    )
}