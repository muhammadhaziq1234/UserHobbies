import mongoose, { Schema, Document } from "mongoose";
import { IHobbie } from "../hobbie/hobbie.schema";
export interface IUser extends Document {
  name: string;
  hobbieId: IHobbie;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  hobbies: [{ type: Schema.Types.ObjectId, ref: "Hobbie" }],
});
// UserSchema.post("save", errorHandling);
const UserModel = mongoose.model<IUser>("User", UserSchema);
// Export the model and return your IUser interface
export default UserModel;
