export class MessageMongodbAdapter{

    constructor(messageMongodbRepository) {
        this.messageAdaptee = messageMongodbRepository
    }

    async create(id, text, sentBy) {
        return await this.messageAdaptee.saveMessage(id, text, sentBy)
    }
}