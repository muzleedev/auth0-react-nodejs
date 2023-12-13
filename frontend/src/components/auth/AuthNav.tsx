import { useAuth0 } from '@auth0/auth0-react'

import { LoginButton } from 'src/components/auth/LoginButton'
import { LogoutButton } from 'src/components/auth/LogoutButton'
import { SignupButton } from 'src/components/auth/SignupButton'

export const AuthNav = () => {
    const { isAuthenticated } = useAuth0()

    return (
        <div className="auth-nav">
            {!isAuthenticated && (
                <div className="nav-buttons">
                    <LoginButton />
                    <SignupButton />
                </div>
            )}
            {isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    )
}
