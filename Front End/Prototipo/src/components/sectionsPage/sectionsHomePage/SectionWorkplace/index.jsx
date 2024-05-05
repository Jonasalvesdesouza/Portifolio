import { useContext } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"


import { SectionMyLatestProjectsHomePage } from "./SectionMyLatestProjects"
import { SectionReadMyBlogHomePage } from "./SectionReadMyBlog"
import { useScreenWidth } from "../../../../hooks"

export const SectionWorkplace = () => {
    const { setSectionHomepage, screenWidth } = useContext(AppBehaviorContext)

    useScreenWidth()
    
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
                            setSectionHomepage(3)
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