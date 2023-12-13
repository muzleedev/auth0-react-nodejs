import { Request, Response } from 'express'

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({
        statusCode: 404,
        error: 'Not Found',
        message: 'Not Found',
        timestamp: new Date().toISOString(),
    })
}
