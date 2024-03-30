import { useState } from 'react'

import { DefaultTemplade } from '../../components'
import { 
    SectionBannerHomePage,
    SectionAboutHomePage,
    SectionMyLatestProjectsHomePage,
    SectionMeEmail,
    SectionReadMyBlogHomePage 
 } from '../../components/sectionsHomePage'

import { NavModal } from '../../components/fragments'


export const HomePage = () =>{
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <DefaultTemplade setIsOpen={setIsOpen}>
            <div>
                <SectionBannerHomePage />
            </div>
            <div>
                <SectionAboutHomePage />
                <SectionMyLatestProjectsHomePage />
                <SectionReadMyBlogHomePage />
                <SectionMeEmail />
            </div>
            {
                isOpen ? <NavModal 
                    setIsOpen={setIsOpen}
                /> : null
            }
        </DefaultTemplade>
    )
}