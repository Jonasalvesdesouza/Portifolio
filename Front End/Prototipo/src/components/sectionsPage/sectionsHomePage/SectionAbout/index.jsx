import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { useContext } from "react"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import { Link } from "react-router-dom"
import {  useScreenWidth } from "../../../../hooks"
import { smallResolution } from "../../../../config"

export const SectionAboutHomePage = () => {
    const {

        setCurrentCard, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const { profile } = useContext(UserAdmContext)

    useScreenWidth()
    
    const handleClick = () => {
        setCurrentCard(2)
    }

    return(
        <div>
            <div>
                <div>
                    <h2>
                        Hello <span>!</span> <br />
                        My name is Jonas
                    </h2>
                    <p>
                        {profile.bio}
                    </p>
                </div>

                <div>
                    <Link
                        onClick={handleClick}
                        to={"/curriculum"}
                    >
                        Curriculum
                    </Link>

                </div>
            </div>
            <div>
                {
                    screenWidth >= smallResolution ?
                    <Button
                        id="button"
                        onClick={ handleClick }
                    >
                        <IoIosArrowDown 
                            size={55} color="#1b1f24"
                        />
                    </Button> :
                    null
                }
            </div>
        </div>
    )
}