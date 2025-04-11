import httpStatus from "http-status-codes";
import AppError from "../../errors/AppError";
import SessionModel from "./sessions.model";
import { ISession } from "./sessions.interface";

const createSessionIntoDB = async (payload: ISession): Promise<ISession> => {
  const newSession = await SessionModel.create(payload);

  if (!newSession) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create session");
  }

  return newSession;
};

const getAllSessionsFromDB = async (): Promise<ISession[]> => {
  const sessions = await SessionModel.find().sort({ createdAt: -1 });

  if (!sessions.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No sessions found");
  }

  return sessions;
};

const getSessionFromDB = async (
  sessionId: string,
): Promise<ISession | null> => {
  const session = await SessionModel.findById(sessionId);

  if (!session) {
    throw new AppError(httpStatus.NOT_FOUND, "Session not found");
  }

  return session;
};

const updateSessionIntoDB = async (
  sessionId: string,
  updatedData: Partial<ISession>,
): Promise<ISession | null> => {
  const session = await SessionModel.findByIdAndUpdate(sessionId, updatedData, {
    new: true,
  });

  if (!session) {
    throw new AppError(httpStatus.NOT_FOUND, "Failed to update session");
  }

  return session;
};

const deleteSession = async (sessionId: string): Promise<void> => {
  const session = await SessionModel.findByIdAndDelete(sessionId);

  if (!session) {
    throw new AppError(httpStatus.NOT_FOUND, "Session not found");
  }
};

export const SessionService = {
  createSessionIntoDB,
  getAllSessionsFromDB,
  getSessionFromDB,
  updateSessionIntoDB,
  deleteSession,
};
