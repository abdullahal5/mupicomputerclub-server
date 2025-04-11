import SendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { SessionService } from "./sessions.services";

const createSession = catchAsync(async (req, res) => {
  const result = await SessionService.createSessionIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Session created successfully",
    data: result,
  });
});

const getAllSessions = catchAsync(async (req, res) => {
  const sessions = await SessionService.getAllSessionsFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sessions retrieved successfully",
    data: sessions,
  });
});

const getSessionById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const session = await SessionService.getSessionFromDB(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Session retrieved successfully",
    data: session,
  });
});

const updateSession = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const session = await SessionService.updateSessionIntoDB(
    id,
    updatedData,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Session updated successfully",
    data: session,
  });
});

const deleteSession = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SessionService.deleteSession(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Session deleted successfully",
    data: null,
  });
});

export const SessionController = {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
};
