import { useContext } from 'react'
import { AppBehaviorContext } from '../../../../providers'
import { useCategoryArticlesData } from '../../../../hooks'
import { CardFilter } from './CardFilter'
import { Button } from '../../../fragments'

export const FilterCategoryArticles = () => {

  const { all, setSearch } = useContext(AppBehaviorContext)
  const categorysData = useCategoryArticlesData()
   
    return(
        <div>
          <ul>
            <li>
              <Button
                onClick={()=> {
                  all()
                  setSearch('')
                }}>
                  All Articles
              </Button>
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