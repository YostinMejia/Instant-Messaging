import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    sentBy: { type: String, required: true },
    text: { type: String, required: true }
}, { timestamps: true })

export const messageModel = new model("messages", MessageSchema)