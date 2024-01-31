import { Message } from "../../domain/entities/message.mjs"

export class MessageService {
    constructor(IMessageRepository) {
        this.messageRepository = IMessageRepository
    }

    async create(id, text, sentBy) {
        const message = new Message(id, text, sentBy)
        return await this.messageRepository.create(message)
    }

    // findById(id){
    //     throw new Error("'findById' message not implemented")
    // }

    // edit(message, newText){
    //     throw new Error("'edit' message not implemented")
    // }

    // delete(message){
    //     throw new Error ("'delete' message not implemented")
    // }



}