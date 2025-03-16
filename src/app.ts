import express from "express";
import bodyParser from 'body-parser';
import MongoConnection from "./config/database";
import productRoutes from "./routes/productRoutes";
import specialRoutes from "./routes/specialOfferRoutes"

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", productRoutes)
app.use("/api", specialRoutes)

MongoConnection();

export default app;