import mongoose, { Schema } from "mongoose";
import { IExecutives } from "./executives.interface";

const ExecutiveSchema: Schema = new Schema<IExecutives>(
  {
    profileImage: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dhcjdfpf7/image/upload/v1757929834/download-removebg-preview_5_rz4kxw.png",
    },
    fullName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    communitySession: { type: String, required: true },
    session: { type: String },
    roleType: {
      type: String,
      required: true,
      enum: ["advisor", "executive", "developer"],
    },
    role: { type: String, required: true },
    linkedin: { type: String, default: "" },
    facebook: { type: String, default: "" },
    twitter: { type: String, default: "" },
  },
  { timestamps: true },
);

export const ExecutivesModel = mongoose.model<IExecutives>(
  "Executives",
  ExecutiveSchema,
);
