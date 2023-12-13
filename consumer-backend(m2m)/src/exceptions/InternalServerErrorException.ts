import { ApiException } from './ApiException'

export class InternalServerErrorException extends ApiException {
    constructor(message: string) {
        super(message, 'Internal Server Error', 500)
    }
}
