import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  refreshToken?: string;
  accessToken?: String;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  refreshToken: { type: String, default: ""},
  accessToken: { type: String, default: ""},
}, {timestamps: true});

export default mongoose.model<IUser>("User", UserSchema);
