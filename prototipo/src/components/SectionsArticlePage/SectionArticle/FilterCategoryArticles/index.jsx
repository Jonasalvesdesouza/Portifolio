import { useContext } from 'react'
import { AppBehaviorContext } from '../../../../providers'
import { useCategoryArticlesData } from '../../../../hooks'
import { CardFilter } from './CardFilter'
import { Link } from 'react-router-dom'

export const FilterCategoryArticles = () => {

  const { all, setSearch } = useContext(AppBehaviorContext)
  const categorysData = useCategoryArticlesData()
   
    return(
        <div>
          <ul>
            <li>
              <Link
                to={'/blog'}
                onClick={()=> {
                  all()
                  setSearch('')
              }}>
                  All Articles
              </Link>
            </li>
            {
              categorysData?.map(category => {
                return <CardFilter 
                  key={category}
                  category={category}
                  
                />
              })
            }
          </ul>
        </div>
    )
}