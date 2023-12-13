import { ComponentType, FC } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from 'src/components/Loading'

interface AuthenticationGuardProps {
    component: ComponentType
}

export const AuthGuard: FC<AuthenticationGuardProps> = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
    })

    return <Component />
}
