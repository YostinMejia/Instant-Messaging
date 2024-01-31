import { httpServer } from "./src/config/server/app.js";
import { startSocketServer } from "./src/config/server/socketIoServer.js"
import { connectDb } from "./src/config/mongoDb/connection.js";

async function run() {
    await connectDb()
    console.log("Connected to the db")

    startSocketServer(httpServer)

    httpServer.listen(process.env.PORT ?? 3000, () => {
        console.log("Server listening on port", process.env.PORT ?? 3000);
    })
}

run()