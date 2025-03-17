import {Response, Request} from "express";
import mongoose from "mongoose";
import User from "../models/User";

/**
 * consulta todos los usuarios disponibles en la collecion de usuarios
 * @param req 
 * @param res 
 */
export const getUsers = async( req: Request, res: Response) => {
      const users = await User.find();
        res.json(users);
}

/**
 * consulta para traer un usuario en especifico con el userId
 * @param req 
 * @param res 
 */
export const getUser = async(req: Request, res:Response ) => {
    try {
        const {userId} = req.params;
        const user = await User.findById(new mongoose.Types.ObjectId(userId))
        if (!user) {
            res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        res.status(500).json({ error: 'Ocurrió un error al cargar el usuario' });
    }



    
}