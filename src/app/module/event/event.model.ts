import mongoose, { Schema } from "mongoose";
import { IEvent } from "./event.interface";

const EventSchema: Schema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    instructorName: { type: String, required: true },
    images: { type: [String], required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
    endTime: { type: String, required: true },
    startTime: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    sponsorLogos: { type: [String] },
    eligibilityCriteria: { type: [String], required: true },
  },
  { timestamps: true },
);

const EventModel = mongoose.model<IEvent>("Event", EventSchema);

export default EventModel;
