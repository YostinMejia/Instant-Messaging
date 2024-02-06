import { MessageService } from "../../aplication/services/messageService.js"

export class MessageController {

    constructor(messageService) {
        this.messageService = new MessageService(messageService)
    }

    async create(text, userId) {
        return await this.messageService.create(text, userId)
    }
}

