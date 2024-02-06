import { InvalidCredentials } from "../../../user/application/errors/invalid-credentials.js";
import { Unauthenticated } from "../../../user/application/errors/unauthenticated.js";
import { Registered } from "../../application/errors/registered.js";
import { NotFound } from "../../application/errors/not-found.js";

import jwt from "jsonwebtoken"

export function errorHandlerMiddleware(err, req, res, next) {

    console.log(err);

    if (err instanceof Registered || err instanceof InvalidCredentials
        || err instanceof Unauthenticated || err instanceof NotFound) {
        return res.status(err.statusCode).json({ error: err.message, success: false })
    }

    if (err instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ error: err.message, success: false })
    }

    if (err instanceof Error) {
        return res.status(400).json({ error: err, success: false })
    }

    return res.status(500).json({ error: err.message, success: false })
}