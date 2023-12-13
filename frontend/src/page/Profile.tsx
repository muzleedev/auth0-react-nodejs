import { useAuth0 } from '@auth0/auth0-react'

import { PageLayout } from 'src/components/Layout'

export const Profile = () => {
    // const { user, getAccessTokenSilently, getIdTokenClaims } = useAuth0()
    const { user } = useAuth0()

    if (!user) {
        return null
    }

    // getAccessTokenSilently().then((data) => console.debug({ accessToken: data }))
    // getIdTokenClaims().then((data) => console.debug({ idToken: data }))

    return (
        <PageLayout>
            <h2>Profile</h2>
            <div style={{ textAlign: 'start' }}>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </PageLayout>
    )
}
