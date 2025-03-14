import express from "express";
import MongoConnection from "./config/database";

const app = express();

MongoConnection();

export default app;