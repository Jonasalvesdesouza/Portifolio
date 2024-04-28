import ImageJonas from "../../../../assets/JonasImage.svg"

import { useContext, useEffect, useState } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"
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
                    During my professional journey, I realized my aptitude in programming. On yet another ordinary day in front of an Excel spreadsheet, I noticed that I was performing repetitive processes. I asked myself if it was possible \to eliminate the tedious tasks, and voilà, I started programming.
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