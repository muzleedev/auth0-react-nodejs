export class ApiException extends Error {
    public readonly statusCode: number
    public readonly error: string
    public readonly timestamp: string

    constructor(message: string, error: string, statusCode: number) {
        super(message)
        this.error = error
        this.statusCode = statusCode
        this.timestamp = new Date().toISOString()
    }
}
