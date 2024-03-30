import { useContext } from 'react'
import { AppBehaviorContext } from '../../../../../providers'
import { Link } from 'react-router-dom'

export const CardFilter = ({category}) => {
    const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext)
    
    return(
        <li>
            <Link
                to={'/blog'}
                onClick={()=> {
                    setCategorysArticles(category)
                    setSearch('')
                }}
            >
                {category}
            </Link>
        </li>
    )
}