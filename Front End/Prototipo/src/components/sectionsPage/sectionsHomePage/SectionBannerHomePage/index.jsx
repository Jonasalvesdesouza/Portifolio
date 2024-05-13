import ImageJonas from "../../../../assets/JonasImage.svg"

import { useContext } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import { useRenderImage, useScreenWidth } from "../../../../hooks"
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

    const urlImage = useRenderImage(profile)
    
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
                <img src={urlImage} alt="Image Jonas" />
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