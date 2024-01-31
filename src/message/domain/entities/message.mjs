export class Message {
    constructor(id, text, user) {
        this.id = id
        this.sentBy = user
        this.text = text
        this.createdAt = new Date()
    }

}
