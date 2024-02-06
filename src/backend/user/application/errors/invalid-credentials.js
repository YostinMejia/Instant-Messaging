export class InvalidCredentials extends Error {
    constructor(message = "The provided email or password is incorrect") {
        super(message)
        this.statusCode = 401

    }
}