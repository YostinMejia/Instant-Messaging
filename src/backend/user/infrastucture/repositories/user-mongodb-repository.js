import { userModel } from "../bd/user-mongoose-model.js";

export class UserMongodbRepository {

    async create(user) {
        const userMongodb = await new userModel(user).save()
        user.id = userMongodb._id.toString()
        return user
    }

    async delete(id) {
        return await userModel.deleteOne({ "_id": id })
    }

    async update(userId, newData) {
        const userUpdated = (await userModel.findOneAndUpdate({ "_id": userId }, newData, {
            new: true,
            runValidators: true
        }))
        return userUpdated
    }

    async findIdByEmail(email) {
        const { _id } = await userModel.findOne({ "email": email }).select("_id");
        return _id ? _id.toString() : null
    }

    async findById(id) {
        return await userModel.findOne({ "_id": id })
    }
}