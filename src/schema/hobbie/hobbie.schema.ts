import mongoose, { Schema, Document } from "mongoose";

export interface IHobbie extends Document {
  name: string;
  passion: string;
}

const HobbieSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  passion: { type: String, required: true },
});

// Export the model and return your IHoobie interface
export default mongoose.model<IHobbie>("Hobbie", HobbieSchema);
