import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()

export class AuthJwtRepository {

    async signPayload(payload) {
        return jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME }
        )
    }
}