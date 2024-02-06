export class Registered extends Error {
    constructor(entity) {
        super(`${entity} is registered`)
        this.statusCode = 400

    }
}