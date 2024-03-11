import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { asyncTryCatchWrapper } from "../../../../../shared/application/async-trycatch-wrapper.js";
import { authJwtMiddleware } from "../../../../../user/infrastucture/middlewares/auth-jwt-middleware.js";

export const messageRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const publicDirectory = join(__dirname, "..", "..", "..", "..", "..", "..", "UI", "message", "public")

/**
 * @openapi
 *  /chat:
 *   get:
 *      summary: Chat interface 
 *      tags:
 *          - Chat
 *      responses:
 *          200:
 *              description: Open the chat interface
 *          401:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: Authentication invalid
 *                              success:
 *                                  type: boolean
 *                                  example: false
 *                          
 */

messageRouter.use("/",
    await asyncTryCatchWrapper(authJwtMiddleware),
    express.static(publicDirectory))
