import { Schema, model, Document } from "mongoose";

export interface IProperty extends Document {
  title: string;
  address: string;
  price: number;
  status: "available" | "reserved" | "sold";
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema = new Schema<IProperty>(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["available", "reserved", "sold"],
      default: "available",
    },
  },
  { timestamps: true }
);

export default model<IProperty>("Property", PropertySchema);
