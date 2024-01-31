import { MessageService } from "../../aplication/services/messageService.mjs"

export class MessageController {

    constructor(messageRepository) {
        this.messageService = new MessageService(messageRepository)
    }

    async create(id, text, sentBy) {
        return await this.messageService.create(id, text, sentBy)
    }
}