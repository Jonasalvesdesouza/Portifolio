import { useContext } from "react"
import { UserAdmContext } from "../../providers/UserAdmContext"
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoute = () => {
    const { user } = useContext( UserAdmContext )

    return !user ? <Outlet /> : <Navigate to="/dashboard" />
}