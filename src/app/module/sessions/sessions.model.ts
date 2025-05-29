import mongoose, { Schema } from "mongoose";
import { ISession } from "./sessions.interface";

const SessionSchema: Schema = new Schema<ISession>(
  {
    title: { type: String, required: true },
    instructorName: { type: String, required: true },
    images: { type: [String], required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
    sessionLink: { type: String },
    endTime: { type: String, required: true },
    startTime: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    eligibilityCriteria: { type: [String], required: true },
    sponsorLogos: { type: [String] },
  },
  { timestamps: true },
);

const SessionModel = mongoose.model<ISession>("Session", SessionSchema);

export default SessionModel;
