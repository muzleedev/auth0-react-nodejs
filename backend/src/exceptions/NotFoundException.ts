import { ApiException } from './ApiException'

export class NotFoundException extends ApiException {
    constructor(message: string) {
        super(message, 'Not Found', 404)
    }
}
