
import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    _id: { type: String, unique: true, index: true, required: true },
    userId: { type: String, required: true, ref: "User" },
    text: { type: String, required: true },
    _id: false
}, { timestamps: true })

export const messageModel = new model("Messages", MessageSchema)