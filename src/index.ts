import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});