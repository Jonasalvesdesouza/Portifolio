import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { useContext } from "react"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import { Link } from "react-router-dom"
import {

    useGoToNextSection, 
    useScreenWidth, 
    useScrollToSection, 
    useScrollEventTriggered 

} from "../../../../hooks"

export const SectionAboutHomePage = () => {
    const {

        setSectionHomepage, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const { profile } = useContext(UserAdmContext)

    useScreenWidth()

    useScrollToSection()
    useScrollEventTriggered()
    useGoToNextSection("workplace", "")    

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
                        onClick={()=>{
                            setSectionHomepage("")
                        }}
                        to={"/curriculum"}
                    >
                        Curriculum
                    </Link>

                </div>
            </div>
            <div>
                {
                    screenWidth >= 700 ?
                    <Button
                        id="button"
                        onClick={
                            ()=> {
                                setSectionHomepage("workplace")           
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
        </div>
    )
}