import { ReactNode } from 'react'

import { NavBar } from 'src/components/NavBar'

export const PageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="page-layout">
            <NavBar />
            <>{children}</>
        </div>
    )
}
