import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// clase par ala conexion a la base de datos
const MongoConnection = async () => {
    try
    {
        //conexion a la base de datos desde la url del .env
        await mongoose.connect(process.env.DATABASE_URL || "");
        console.log("Conectado a la Base de datos")
    } catch(error) 
    {
        //se sale del proceso si la conexion es fallida y reporta el error
        console.error("error al conectar a la base de datos", error);
        process.exit(1)
    }
};

export default MongoConnection;