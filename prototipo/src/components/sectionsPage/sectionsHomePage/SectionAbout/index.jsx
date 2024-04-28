import { IoIosArrowDown } from "react-icons/io"
import { Button } from "../../../fragments"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../../providers"
import { Link } from "react-router-dom"
import { useGoToNextSection, useScreenWidth, useScrollToSection, useScrollEventTriggered } from "../../../../hooks"

export const SectionAboutHomePage = () => {
    const {

        setSectionHomepage, 
        screenWidth,

    } = useContext(AppBehaviorContext)

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
                        In 2010, I took my first web design course through microCamp. 
                        Unfortunately, because I was very young and didn't understand how 
                        the world of work works, I ended up giving up my career as a programmer.
                        But I remembre with enthusiasm the hours I spent in front of the computer 
                        playing with Adobe Fireworks and Dreamweaver. Today, these tools are out
                        of use, and the job market has evolved. Now, at 29 years old, with enough
                        maturity to better understand reality, I realize that I have the talent and 
                        ability to become a great programmer!. I regret not pursuing my career, but 
                        now I am determined to move forward and achieve my goals
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