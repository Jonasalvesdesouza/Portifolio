import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppBehaviorContext } from '../../../../../../providers'

export const ListNavProjectsPage = () => {
    const { all } = useContext(AppBehaviorContext)

    return(
        <ul>
            <li>
                <Link
                    onClick={()=>{ all()}} 
                    to={'/'}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    onClick={()=>{ all()}} 
                    to={'/blog'}
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    onClick={()=>{ all()}} 
                    to={'/curriculum'}
                >
                    Curriculum
                </Link>
            </li>
        </ul>
    )
}