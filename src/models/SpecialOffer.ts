import mongoose,{Schema,Document} from "mongoose";

export interface IPrecioEspecial extends Document {
    productId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    specialPrice: number;
}

const SpecialOfferSchema : Schema = new Schema({
    productId : { type: Schema.Types.ObjectId, ref: 'productos', required:true},
    userId: { type: Schema.Types.ObjectId, ref: 'usuarios', required: true},
    specialPrice : {type: Number, required: true},
  });

  export default mongoose.model<IPrecioEspecial>("preciosEspecialesIbarra75", SpecialOfferSchema);