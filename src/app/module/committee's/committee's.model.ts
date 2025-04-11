import mongoose, { Schema } from "mongoose";
import { ICommittee } from "./committee's.interface";

const CommitteeSchema: Schema = new Schema<ICommittee>(
  {
    year: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

const CommitteeModel = mongoose.model<ICommittee>("Committee", CommitteeSchema);

export default CommitteeModel;
