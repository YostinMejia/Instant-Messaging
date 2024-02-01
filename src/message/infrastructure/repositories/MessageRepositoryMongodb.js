import { messageModel } from "../database/messageSchema.js";

export class MessageRepositoryMongodb{

    async saveMessage(message) {
        const msg = new messageModel(message)
        return await msg.save()
    }
}