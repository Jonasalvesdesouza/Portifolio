import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppBehaviorContext } from "../../../../../../providers"

export const ListNavBlogPage = () => {
    const { resetStadeCategorys } = useContext(AppBehaviorContext)

    return(
        <ul>
            <li>
                <Link
                    onClick={()=>{ resetStadeCategorys()}} 
                    to={"/"}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    onClick={()=>{ resetStadeCategorys()}} 
                    to={"/projects"}>
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    onClick={()=>{ resetStadeCategorys()}} 
                    to={"/curriculum"}>
                    Curriculum
                </Link>
            </li>
        </ul>
    )
}