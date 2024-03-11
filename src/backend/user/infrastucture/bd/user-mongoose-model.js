

import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    usersBlocked: [{ type: String, ref: "User" }],

}, { timestamps: true })

export const userModel = new model("User", userSchema)