export class NotFound extends Error {
    constructor(entity) {
        super(`${entity} not Found`)
        this.statusCode = 404

    }

}