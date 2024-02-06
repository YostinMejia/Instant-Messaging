import express from "express";
import dotenv from "dotenv";
import helmet from "helmet"
import cors from "cors"
import { createServer } from "http";
import { errorHandlerMiddleware } from "../../shared/infrastructure/middlewares/error-handler-middleware.js";
import { messageRouter } from "./routes/v1/message/message-router.js";
import { userRouter } from "./routes/v1/user/user-router.js";

const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
dotenv.config();

export const httpServer = createServer(app)

app.use("/", userRouter)
app.use("/chat", messageRouter)

app.use(errorHandlerMiddleware)

app.use("*", (req, res) => {
    res.status(404).send("Route not found")
});
