import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { asyncTryCatchWrapper } from "../../../../../shared/application/async-trycatch-wrapper.js";
import { authJwtMiddleware } from "../../../../../user/infrastucture/middlewares/auth-jwt-middleware.js";

export const messageRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const publicDirectory = join(__dirname, "..", "..", "..", "..", "..", "..", "UI", "message", "public")

messageRouter.use("/",
    await asyncTryCatchWrapper(authJwtMiddleware),
    express.static(publicDirectory))
