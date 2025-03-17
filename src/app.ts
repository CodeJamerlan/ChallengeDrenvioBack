import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import MongoConnection from "./config/database";
import productRoutes from "./routes/productRoutes";
import specialRoutes from "./routes/specialOfferRoutes"
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(cors({}))
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", productRoutes)
app.use("/api", specialRoutes)
app.use("/api", userRoutes)

MongoConnection();

export default app;