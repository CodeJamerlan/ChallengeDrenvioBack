import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const UserSchema : Schema = new Schema({
    name : { type: String, required: true},
    email: { type: String, required: true},
    password : {type: String, required: true},
    role: {type: String, required: true},
  });

  export default mongoose.model<IUser>("usuarios", UserSchema);