import { useContext } from 'react'
import { AppBehaviorContext, UserAdmContext } from '../providers'

export const useFilterArticles = () => {
    const { articlesList } = useContext(UserAdmContext)
    const { categorysArticles } = useContext(AppBehaviorContext)

    const result = articlesList.filter((article)=>{
        const categoryFilter = categorysArticles === '' ? true : article.category === categorysArticles
        
        return categoryFilter
    })

    return result
}