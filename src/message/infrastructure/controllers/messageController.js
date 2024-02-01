import { MessageService } from "../../aplication/services/messageService.js"

export class MessageController {

    constructor(messageAdapter) {
        this.messageService = new MessageService(messageAdapter)
    }

    async create(id, text, sentBy) {
        return await this.messageService.create(id, text, sentBy)
    }
}

