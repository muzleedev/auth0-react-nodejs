import { Request, Response, NextFunction } from 'express'

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

    logger.error(error)

    res.status(500).json({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Something went wrong',
        timestamp: new Date().toISOString(),
    })
}
