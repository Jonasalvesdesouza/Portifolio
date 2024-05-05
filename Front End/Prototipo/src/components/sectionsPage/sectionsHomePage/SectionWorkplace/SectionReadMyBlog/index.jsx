import { useContext } from "react"
import { SlArrowRight } from "react-icons/sl"
import { Link } from "react-router-dom"
import { AppBehaviorContext } from "../../../../../providers"

export const SectionReadMyBlogHomePage = () => {
    const { setCurrentCard } = useContext(AppBehaviorContext)

    return(
        <div>
            <h3>
                Let"s read <br />
                my <span>blog!</span>
            </h3>
            <p>
                Welcome to my blog, where I'll share with 
                you some of the knowledge I've acquired
                during my journey.
            </p>
            <Link
                onClick={()=>{
                    setCurrentCard(0)
                }}
                to={"/blog"}
            >
                <span>
                    READ MY ARTICLES
                </span>
                <samp>
                    <SlArrowRight
                        size={20}
                        color="#e8e9ea" 
                    />
                </samp>
            </Link>
        </div>
    )
}