import { startSocketServer } from "../../socketio-server.js"
import { connectDb } from "../../../mongodb/connection.js";
import { createServer } from "http";

export async function run(app) {
    await connectDb()
    console.log("Connected to the db")
    
    const httpServer = createServer(app)
    startSocketServer(httpServer)
    
    const port = process.env.PORT ?? 3000
    httpServer.listen(port, () => {
        console.log("Server listening on port", port);
    })
}

