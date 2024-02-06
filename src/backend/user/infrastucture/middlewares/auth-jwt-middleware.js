import { Unauthenticated } from "../../application/errors/unauthenticated.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export async function authJwtMiddleware(req, res, next) {
    const scheme = req.headers.authorization

    if (!scheme || !scheme.toLowerCase().startsWith("bearer ")) {
        throw new Unauthenticated()
    }

    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id: payload.id }

    next()
}