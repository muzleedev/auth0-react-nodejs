import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

import { PageLayout } from 'src/components/Layout'
import { getDogs } from 'src/api/api'
import { LoadingContainer } from 'src/components/LoadingContainer'

export const Dogs = () => {
    const [dogs, setDogs] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const accessToken = await getAccessTokenSilently()
                const dogs = await getDogs(accessToken)
                setDogs(dogs)
            } catch (e) {
                console.error(e)
            } finally {
                setIsFetching(false)
            }
        }

        fetchDogs()
    }, [getAccessTokenSilently])

    return (
        <PageLayout>
            <LoadingContainer isLoading={isFetching}>
                <h2>Dogs</h2>
                <div style={{ textAlign: 'start' }}>
                    <pre>{JSON.stringify(dogs, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
