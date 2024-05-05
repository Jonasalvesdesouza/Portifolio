import ImageJonas from "../../../../assets/JonasImage.svg"

import { useContext, useEffect, useState } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import { useScreenWidth } from "../../../../hooks"
import { smallResolution } from "../../../../config"

export const SectionBannerHomePage = () => {

    const {

        setCurrentCard, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const { profile } = useContext(UserAdmContext)
    
    useScreenWidth()
   
    const handleClick = () => {
        setCurrentCard(1)
    }
    
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