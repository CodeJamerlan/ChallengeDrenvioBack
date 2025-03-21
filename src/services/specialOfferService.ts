import SpecialOffer from "../models/SpecialOffer";


/**
 * servicio refoactorizado para consultar las ofertas especiales mediante el usuario
 * @param userId el id ddel usuario
 * @returns retorna los precios especiales filtrados por el usuario
 */
export const setSpecialOffersByUser = async (userId:any): Promise<any> => {
    try {
        const userSpecialOffers = await SpecialOffer.find({ userId })
        .populate('productId', 'specialPrice');
        return userSpecialOffers;
    } catch (error) {
        console.error('Error al obtener ofertas especiales:', error);
        throw new Error('Ocurrió un error al obtener las ofertas especiales');
    }
};