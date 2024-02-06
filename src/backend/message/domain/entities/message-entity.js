import { v4 as uuidv4 } from "uuid"

export class Message {
    constructor(text, userId) {
        this.id = uuidv4()
        this.userId = userId
        this.text = text
        this.createdAt = new Date()
    }

}
