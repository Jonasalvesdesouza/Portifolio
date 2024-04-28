import { useContext } from "react"
import { SlArrowRight } from "react-icons/sl"
import { Link } from "react-router-dom"
import { AppBehaviorContext } from "../../../../../providers"

export const SectionMyLatestProjectsHomePage = () => {
    const { setSectionHomepage } = useContext(AppBehaviorContext)

    return(
        <div>
            <h3>
                My latest <br />
                <span>Projects.</span>
            </h3>
            <p>
                Check out some freelance projects and work 
                completed during my learning journey as a 
                full stack developer.
            </p>
            <Link
                onClick={()=>{
                    setSectionHomepage("")
                }}
                to={"/projects"}
            >
                <span>
                    SEE MY LATEST WORK
                </span>
                <span>
                    <SlArrowRight
                        size={20}
                        color="#e8e9ea" 
                    />
                </span>
            </Link>
        </div>
    )
}