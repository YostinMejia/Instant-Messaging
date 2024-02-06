import { Server } from "socket.io";
import { MessageMongodbRepository } from "../../message/infrastructure/repositories/message-mongodb-repository.js";
import { MessageService } from "../../message/aplication/services/message-service.js";

export function startSocketServer(httpServer) {

    const io = new Server(httpServer);

    io.on("connection", (socket) => {
        const message = new MessageService(new MessageMongodbRepository())
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