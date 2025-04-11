import SendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes"
import { EventServices } from "./event.service";

const createEvent = catchAsync(async (req, res) => {
  const result = await EventServices.createEventIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Event created successfully",
    data: result,
  });
});

const getAllEvents = catchAsync(async (req, res) => {
  const events = await EventServices.getAllEventFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Events retrieved successfully",
    data: events,
  });
});

const getEventById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const event = await EventServices.getEventFromDB(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event retrieved successfully",
    data: event,
  });
});

const updateEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const event = await EventServices.updateEventIntoDB(id, updatedData);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event updated successfully",
    data: event,
  });
});

const deleteEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  await EventServices.deleteEvent(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event deleted successfully",
    data: null,
  });
});

export const EventController = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
