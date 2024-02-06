export class Unauthenticated extends Error {
    constructor(message = "Authentication invalid") {
        super(message)
        this.statusCode = 401
    }
}
