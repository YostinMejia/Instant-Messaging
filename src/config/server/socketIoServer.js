import { Server } from "socket.io";
import { MessageRepositoryMongodb } from "../../message/infrastructure/repositories/MessageRepositoryMongodb.js";
import { MessageMongodbAdapter } from "../../message/infrastructure/adapters/messageMongoDbAdapter.js";
import { MessageController } from "../../message/infrastructure/controllers/messageController.js";

export function startSocketServer(httpServer) {

    const io = new Server(httpServer);

    io.on("connection", (socket) => {
        const mongodbAdapter = new MessageMongodbAdapter(new MessageRepositoryMongodb())
        const message = new MessageController(mongodbAdapter)
        console.log("A user connected", socket.id);

        socket.on("chat typing", (userName) => {
            socket.broadcast.emit("chat typing", userName);
        });

        socket.on("chat message", async (msg) => {
            const { id, text, sentBy } = msg
            await message.create(id, text, sentBy)
            io.emit("chat message", msg);
        });

        socket.on("disconnect", (evento) => {
            console.log("user disconnected", evento);
        });
    });

}