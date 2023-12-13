import { Request, Response, NextFunction } from 'express'
import { InsufficientScopeError, InvalidTokenError, auth } from 'express-oauth2-jwt-bearer'

import { appConfig } from 'config/appConfig'

export const jwtCheck = auth({
    audience: appConfig.oAuth.audience,
    issuerBaseURL: appConfig.oAuth.issuerBaseURL,
    tokenSigningAlg: appConfig.oAuth.tokenSigningAlg,
})

export const guard = (requiredPermissions: string[]) => (req: Request, _res: Response, next: NextFunction) => {
    try {
        const permissions = (req.auth?.payload?.permissions || []) as string[]

        const hasPermissions = requiredPermissions.every((requiredPermission) => permissions.includes(requiredPermission))

        if (!hasPermissions) {
            next(new InsufficientScopeError())
        } else {
            next()
        }
    } catch (error) {
        throw new InvalidTokenError()
    }
}
