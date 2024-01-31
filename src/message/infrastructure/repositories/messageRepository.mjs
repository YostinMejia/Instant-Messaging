import { IMessageRepository } from "../../domain/repositories/messageRepository.mjs";
import { messageModel } from "../database/messageSchema.mjs";

export class MessageRepositoryMongodb extends IMessageRepository {

    async create(message) {
        const msg = new messageModel(message)
        return await msg.save()
    }
}