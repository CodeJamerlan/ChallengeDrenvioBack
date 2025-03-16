import {Request, Response} from "express";
import SpecialOffer from '../models/SpecialOffer'

/**
 * agrega una nueva realcion de precio especial de un producto a un usuario, si la relacion ya existe la actualiza
 * @param req 
 * @param res 
 * @returns retorna la relacion si esta ya existe 
 */
export const addSpecialOffer = async(req: Request, res: Response) => 
    {
    try {
        const {productId, userId, specialPrice} = req.body;

        const existingSpecialOffer = await SpecialOffer.findOne({productId,userId})

        if (existingSpecialOffer) {
            existingSpecialOffer.specialPrice = specialPrice;
            await existingSpecialOffer.save();
            res.status(200).json({
                message: 'Precio especial actualizado',
                data: existingSpecialOffer
            });
        } else{
            const newSpecialOffer = new SpecialOffer({
                productId: productId,
                userId: userId,
                specialPrice : specialPrice,
            });

            await newSpecialOffer.save();
            console.log('Precio especial agregado:', newSpecialOffer);
            res.status(201).json({
                message: 'Precio creado Existosamente',
                data: newSpecialOffer
            });
        }     
        } catch (error) {
            console.error('Error al crear precio especial: ', error);
            res.status(500).json({error: 'Ocurrio un error al crear el Precio'});

        }   
    }

/**
 * Consulta y trae todas las relaciones de precios especiales
 * @param req 
 * @param res 
 */
export const getSpecialOffers = async(req: Request, res:Response) => {
        const specialOffers = await SpecialOffer.find()
        res.json(specialOffers);
}

/**
 * trae las relaciones especificas sobre precios especiales con un usuario en especifico
 * @param req 
 * @param res 
 */
export const getSpecialOffersByUser = async(req: Request, res:Response) => {
    try {
        const {userId} = req.params;
        const userSpecialOffers = await SpecialOffer.find({ userId })
        .populate('productId', 'specialPrice');
        res.status(200).json(userSpecialOffers);
    } catch (error) {
        console.error('Error al cargar precios especiales para el usuario', error);
        res.status(500).json({error: 'Ocurrio un error al cargar los precios especiales'})
        
    }
}