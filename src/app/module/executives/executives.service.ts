/* eslint-disable @typescript-eslint/no-explicit-any */
import { IExecutives } from "./executives.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status-codes";
import { ExecutivesModel } from "./executives.model";

const createExecutiveIntoDB = async (body: IExecutives) => {
  const existingExecutive = await ExecutivesModel.findOne({
    rank: body.rank,
  });

  if (existingExecutive) {
    throw new AppError(
      httpStatus.CONFLICT,
      `Executive with rank "${body.rank}" already exists`,
    );
  }

  const result = await ExecutivesModel.create(body);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Executive not found");
  }

  return result;
};

const updateExecutiveInDB = async (id: string, body: Partial<IExecutives>) => {
  const existingExecutive = await ExecutivesModel.findOne({
    rank: body.rank,
    _id: { $ne: id },
  });

  if (existingExecutive) {
    throw new AppError(
      httpStatus.CONFLICT,
      `Executive with rank "${body.rank}" already exists`,
    );
  }

  const result = await ExecutivesModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return result;
};

const getAllExecutivesFromDB = async (session?: string, roleType?: string) => {
  const query: any = {};

  if (session) {
    query.communitySession = session;
  }
  if (roleType) {
    query.roleType = roleType;
  }

  const results = await ExecutivesModel.find(query).sort({
    rank: 1,
  });

  return results;
};

const getExecutiveByIdFromDB = async (id: string) => {
  const result = await ExecutivesModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Executive not found");
  }
  return result;
};

const hardDeleteExecutiveFromDB = async (id: string) => {
  const result = await ExecutivesModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Executive not found");
  }
  return result;
};

export const ExecutiveServices = {
  createExecutiveIntoDB,
  updateExecutiveInDB,
  getAllExecutivesFromDB,
  getExecutiveByIdFromDB,
  hardDeleteExecutiveFromDB,
};
