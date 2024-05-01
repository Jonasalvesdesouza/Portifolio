import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppBehaviorContext } from "../../../../../../providers"

export const ListNavCurriculumPage = () => {
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
                    to={"/projects"}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    onClick={()=>{ resetStadeCategorys()}} 
                    to={"/blog"}
                >
                    Blog
                </Link>
            </li>
        </ul>
    )
}