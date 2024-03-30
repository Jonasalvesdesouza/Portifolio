import { useContext } from 'react'
import { AppBehaviorContext } from '../providers'

export const useArticlesSearch = (articles, search) => { 
    const { categorysArticles } = useContext(AppBehaviorContext)
    
    const filter = articles?.filter((article) => {

        const searchFilter = search === '' ? true : 
            article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            article.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        const categoryFilter = categorysArticles === '' ? true : article.category === categorysArticles

        return searchFilter && categoryFilter
 })
    return filter
}
