import {Request, Response} from "express";
import Product from '../models/Product';

/**
 * Consulta todos los productos con verificacion si el usuario tiene precios especiales
 * @param req 
 * @param res 
 */
export const getProducts = async (req: Request, res:Response) => {
    const products = await Product.find();
    res.json(products);

};