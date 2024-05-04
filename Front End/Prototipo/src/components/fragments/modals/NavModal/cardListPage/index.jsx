import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppBehaviorContext } from "../../../../../providers"

export const CardListPage = ({page}) => {
    const { resetStadeCategorys } = useContext(AppBehaviorContext)

    return(
        <ul>
            <li>
                <Link
                    onClick={()=>{ resetStadeCategorys()}} 
                    to={page.router}
                >
                    {page.name}
                </Link>
            </li>
        </ul>
    )
}