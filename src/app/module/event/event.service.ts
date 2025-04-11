import httpStatus from "http-status-codes";
import AppError from "../../errors/AppError";
import Event from "./event.model";
import { IEvent } from "./event.interface";

const createEventIntoDB = async (payload: IEvent): Promise<IEvent> => {
  const newEvent = await Event.create(payload);

  if (!newEvent) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create event");
  }

  return newEvent;
};

const getAllEventFromDB = async (): Promise<IEvent[]> => {
  const events = await Event.find().sort({ createdAt: -1 });

  if (!events.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No events found");
  }

  return events;
};

const getEventFromDB = async (eventId: string): Promise<IEvent | null> => {
  const event = await Event.findOne({ _id: eventId });

  if (!event) {
    throw new AppError(httpStatus.NOT_FOUND, "Event not found");
  }

  return event;
};

const updateEventIntoDB = async (
  eventId: string,
  updatedData: Partial<IEvent>,
): Promise<IEvent | null> => {
  const event = await Event.findByIdAndUpdate(eventId, updatedData, {
    new: true,
  });

  if (!event) {
    throw new AppError(httpStatus.NOT_FOUND, "Failed to update event");
  }

  return event;
};

const deleteEvent = async (eventId: string): Promise<void> => {
  const event = await Event.findByIdAndDelete(eventId);

  if (!event) {
    throw new AppError(httpStatus.NOT_FOUND, "Event not found");
  }
};

export const EventServices = {
  createEventIntoDB,
  getAllEventFromDB,
  getEventFromDB,
  updateEventIntoDB,
  deleteEvent,
};
