import ImageJonas from "../../../../assets/JonasImage.svg"

import { useContext, useEffect, useState } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import { 

    useGoToNextSection,
    useScreenWidth, 
    useScrollEventTriggered, 
    useScrollToSection 

} from "../../../../hooks"


export const SectionBannerHomePage = () => {

    const {

        setSectionHomepage, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const { profile } = useContext(UserAdmContext)
    
    useScreenWidth()
    
    useScrollToSection()
    useScrollEventTriggered()
    useGoToNextSection("about", "")

    return(
        <div>
            <div>
                <h1>
                    Devoloper <br />
                    <span>Full</span> 
                    Stack
                    <span>.</span>
                </h1>
                <p>
                    {profile.presentation}
                </p>
            </div>
            <div>
                <img src={ImageJonas} alt="Image Jonas" />
            </div>
            {
                screenWidth >= 700 ?
                <Button
                    id="button"
                    onClick={
                        ()=> {
                        setSectionHomepage("about")                       
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