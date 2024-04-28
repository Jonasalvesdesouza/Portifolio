import { useContext, useState } from "react"

import { DefaultTemplate } from "../../components/templade"
import { ArticlesContext } from "../../providers"
import { SectionArticle, SectionTopArticle } from "../../components/sectionsPage/SectionsArticlePage"
import { NavModal } from "../../components/fragments"

export const ArticlePage = () => {
    const { data } = useContext(ArticlesContext)

    const [ isOpen, setIsOpen ] = useState()

    return(
        <DefaultTemplate setIsOpen={setIsOpen}>
            <div>
                <SectionTopArticle />
                <SectionArticle />                
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </DefaultTemplate>
    )
}