import mongoose,{Schema,Document} from "mongoose";

export interface IProduct extends Document {
    name: string;
    price: number;
    category: string;
    stock: number;
    description: string;
    brand: string;
    sku: string;
    tags: [string];
}

const ProductSchema : Schema = new Schema({
    name : { type: String, required: true},
    price: { type: Number, required: true},
    category : {type: String, required: true},
    stock: {type: Number, required: true},
    description: {type: String, required: false},
    brand : {type: String, required: true},
    sku : {type: String, required: true},
    tags : {type: [String], required: false},

  });

  export default mongoose.model<IProduct>("productos", ProductSchema);
