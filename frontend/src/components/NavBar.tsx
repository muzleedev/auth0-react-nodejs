import { NavLink } from 'react-router-dom'

import { AuthNav } from 'src/components/auth/AuthNav'
import { routes } from 'src/router/routes'

export const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to={routes.home} end>
                Home
            </NavLink>
            <NavLink to={routes.profile} end>
                Profile
            </NavLink>
            <NavLink to={routes.dogs} end>
                Dogs (protected)
            </NavLink>
            <AuthNav />
        </div>
    )
}
