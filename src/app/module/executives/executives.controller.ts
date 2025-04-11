import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../middlewares/sendResponse";
import { ExecutiveServices } from "./executives.service";

const createExecutive = catchAsync(async (req, res) => {
  const result = await ExecutiveServices.createExecutiveIntoDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Executive Created Successfully",
    data: result,
  });
});

const updateExecutive = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExecutiveServices.updateExecutiveInDB(id, req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Executive Updated Successfully",
    data: result,
  });
});

const getAllExecutives = catchAsync(async (req, res) => {
  const session = req.query.session as string;
  const roleType = req.query.roleType as string;
  const result = await ExecutiveServices.getAllExecutivesFromDB(
    session,
    roleType,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Executives Retrieved Successfully",
    data: result,
  });
});

const getSingleExecutive = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExecutiveServices.getExecutiveByIdFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Executive Retrieved Successfully",
    data: result,
  });
});

const hardDeleteExecutive = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ExecutiveServices.hardDeleteExecutiveFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Executive Deleted Successfully",
    data: null,
  });
});

export const ExecutiveController = {
  createExecutive,
  updateExecutive,
  getAllExecutives,
  getSingleExecutive,
  hardDeleteExecutive,
};
