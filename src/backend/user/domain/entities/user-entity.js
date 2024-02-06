export class User {
    constructor(name, email, password) {
        if (!name || !email || !password) {
            throw new Error("Name, email, and password must be provided.")
        }

        this.id = null
        this.name = name
        this.email = email
        this.password = password
        this.usersBlocked = []
        this.createdAt = new Date()

    }

}
