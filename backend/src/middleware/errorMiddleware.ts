import { Request, Response, NextFunction } from 'express'
import { UnauthorizedError, InsufficientScopeError, InvalidTokenError } from 'express-oauth2-jwt-bearer'

import { ApiException } from 'exceptions/ApiException'

import { LoggerFactory } from 'utils/LoggerFactory'

const logger = LoggerFactory.getLogger('ErrorHandler')

export const errorMiddleWare = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (error instanceof ApiException) {
        return res.status(error.statusCode).json({
            ...error,
            statusCode: error.statusCode,
            error: error.error,
            message: error.message,
            timestamp: error.timestamp,
        })
    }

    if (error instanceof InsufficientScopeError) {
        return res.status(error.statusCode).json({
            statusCode: error.status,
            error: 'Forbidden',
            message: error.message,
            timestamp: new Date().toISOString(),
        })
    }

    if (error instanceof InvalidTokenError) {
        return res.status(error.statusCode).json({
            statusCode: error.status,
            error: 'Forbidden',
            message: error.message,
            timestamp: new Date().toISOString(),
        })
    }

    if (error instanceof UnauthorizedError) {
        return res.status(error.status).json({
            statusCode: error.status,
            error: 'Unauthorized',
            message: error.message,
            timestamp: new Date().toISOString(),
        })
    }

    logger.error(error)

    res.status(500).json({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Something went wrong',
        timestamp: new Date().toISOString(),
    })
}
