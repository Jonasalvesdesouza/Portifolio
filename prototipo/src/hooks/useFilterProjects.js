import { useContext } from 'react'
import { AppBehaviorContext, UserAdmContext } from '../providers'


export const useFilterProjects = () => {
    const { projectsList } = useContext(UserAdmContext)
    const { categorysProject } = useContext(AppBehaviorContext)

    const result = projectsList.filter((project) =>{
        const categoryFilter = categorysProject === '' ? true : project.category === categorysProject

        return categoryFilter
    })
    
    return result
}