import { useContext, useState } from 'react'
import { DefaultTemplade } from '../../components'
import { ArticlesContext } from '../../providers'
import { SectionArticle, SectionTopArticle } from '../../components/SectionsArticlePage'
import { NavModal } from '../../components/fragments'

export const ArticlePage = () => {
    const { data } = useContext(ArticlesContext)

    const [ isOpen, setIsOpen ] = useState()

    return(
        <DefaultTemplade setIsOpen={setIsOpen}>
            <div>
                <SectionTopArticle />
                <SectionArticle />                
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </DefaultTemplade>
    )
}