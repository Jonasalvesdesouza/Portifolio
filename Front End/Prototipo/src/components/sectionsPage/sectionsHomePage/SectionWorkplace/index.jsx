import { useContext } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"


import { SectionMyLatestProjectsHomePage } from "./SectionMyLatestProjects"
import { SectionReadMyBlogHomePage } from "./SectionReadMyBlog"
import { useGoToNextSection, useScreenWidth, useScrollToSection, useScrollEventTriggered } from "../../../../hooks"

export const SectionWorkplace = () => {
    const { setSectionHomepage, screenWidth } = useContext(AppBehaviorContext)

    useScreenWidth()
    
    useScrollToSection()
    useScrollEventTriggered()
    useGoToNextSection("contact", "about")

    return(
        <div>
            <SectionMyLatestProjectsHomePage />
            <SectionReadMyBlogHomePage />

            {
                screenWidth >= 700 ?
                <Button
                    id="button"
                    onClick={
                        ()=> {
                            setSectionHomepage("contact")
                        }
                    }
                >
                    <IoIosArrowDown 
                        size={55} color="#1b1f24"
                    />
                </Button> :
                null
            }

        </div>
    )
}