import { Request, Response, NextFunction } from 'express'

import { LoggerFactory } from 'utils/LoggerFactory'

const logger = LoggerFactory.getLogger('Route')

export const loggerMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    logger.info(`${req.method} ${req.url}`)

    next()
}
