import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from 'src/components/Loading'
import { AuthGuard } from 'src/auth/AuthGuard'
import { Profile } from 'src/page/Profile'
import { Home } from 'src/page/Home'
import { Dogs } from 'src/page/Dogs'
import { routes } from 'src/router/routes'

export const AppRoutes = () => {
    const { isLoading } = useAuth0()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.profile} element={<AuthGuard component={Profile} />} />
            <Route path={routes.dogs} element={<AuthGuard component={Dogs} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
