import { Message } from "../../domain/entities/message.js"

export class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository
    }

    async create(id, text, sentBy) {
        const message = new Message(id, text, sentBy)
        return await this.messageRepository.create(message)
    }

}