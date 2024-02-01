import express from "express";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

const app = express();
dotenv.config();

export const httpServer = createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta para los archivos estáticos
const publicDirectory = join(__dirname, "../","../","UI","public");
app.use("/",express.static(publicDirectory));


app.use("*", (req, res) => {
    res.status(404).send("Route not found");
});


