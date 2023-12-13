import { ApiException } from './ApiException'

export class BadRequestException extends ApiException {
    constructor(message: string) {
        super(message, 'Bad Request', 400)
    }
}
