import { Message } from "../../domain/entities/message-entity.js"

export class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository
    }

    async create(text, userId) {
        const message = new Message(text, userId)
        return await this.messageRepository.create(message)
    }

}