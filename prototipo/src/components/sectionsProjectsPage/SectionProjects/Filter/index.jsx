import { useContext } from 'react'
import { AppBehaviorContext } from '../../../../providers'
import { useCategoryProjectsData } from '../../../../hooks'
import { Button } from '../../../fragments'
import { CardFilter } from './CardFilter'

export const FilterProjects = () => {

  const { all } = useContext(AppBehaviorContext)
  const categorysData = useCategoryProjectsData()
   
    return(
        <div>
          <ul>
            <li>
              <Button
                onClick={()=> all()}>
                  All Projects
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