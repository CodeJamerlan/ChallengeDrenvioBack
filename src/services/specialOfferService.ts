import SpecialOffer from "../models/SpecialOffer";

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