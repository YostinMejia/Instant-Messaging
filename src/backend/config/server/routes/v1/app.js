import express from "express";
import dotenv from "dotenv";
import helmet from "helmet"
import cors from "cors"
import { errorHandlerMiddleware } from "../../../../shared/infrastructure/middlewares/error-handler-middleware.js";
import { messageRouter } from "./message/message-router.js";
import { userRouter } from "./user/user-router.js";
import { swaggerDocs } from "./swagger.js";


export const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
dotenv.config();

app.use("/", userRouter)
app.use("/chat", messageRouter)

app.use(errorHandlerMiddleware)

swaggerDocs(app)

app.use("*", (req, res) => {
    res.status(404).send("Route not found")
});
