import { useContext } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"


import { SectionMyLatestProjectsHomePage } from "./SectionMyLatestProjects"
import { SectionReadMyBlogHomePage } from "./SectionReadMyBlog"
import { useScreenWidth } from "../../../../hooks"
import { smallResolution } from "../../../../config"

export const SectionWorkplace = () => {
    const {

        setCurrentCard, 
        screenWidth

    } = useContext(AppBehaviorContext)

    useScreenWidth()

    const handleClick = () => {
        setCurrentCard(3)
    }
    
    return(
        <div>
            <SectionMyLatestProjectsHomePage />
            <SectionReadMyBlogHomePage />

            {
                screenWidth >= smallResolution ?
                <Button
                    id="button"
                    onClick={handleClick}
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