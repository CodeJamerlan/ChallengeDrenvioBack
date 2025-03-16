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
    //TODO validar que el producto este cambiando

};

/**
 * consultar un producto por id de Producto
 * @param req 
 * @param res 
 */
export const getProductById = async(req:Request, res:Response) => {
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);

        if (!product) {
            res.status(404).json({
                message: 'Producto no encontrado'
            });
        }
        res.status(200).json({ data: product });
    } catch (error) {
        console.error('Error al buscar el producto:', error);
        res.status(500).json({ error: 'Ocurrió un error al cargar el producto' });
    }
}