import { messageModel } from "../database/message-mongodb-model.js";

export class MessageMongodbRepository {

    async save(message) {
        const msg = new messageModel(message)
        return await msg.save()
    }
}