import { httpServer } from "./src/backend/config/server/app.js";
import { startSocketServer } from "./src/backend/config/server/socketio-server.js"
import { connectDb } from "./src/backend/config/mongodb/connection.js";

async function run() {
    await connectDb()
    console.log("Connected to the db")

    startSocketServer(httpServer)
    const port = process.env.PORT ?? 3000
    httpServer.listen(port, () => {
        console.log("Server listening on port", port);
    })
}

run()
