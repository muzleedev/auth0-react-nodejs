import { ReactNode } from 'react'

import { Loading } from 'src/components/Loading'

export const LoadingContainer = ({ children, isLoading }: { children: ReactNode; isLoading: boolean }) => {
    if (isLoading) {
        return <Loading />
    }

    return <div>{children}</div>
}
