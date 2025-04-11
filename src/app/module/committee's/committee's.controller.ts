import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../middlewares/sendResponse";
import { CommitteeService } from "./committee's.service";

const createCommittee = catchAsync(async (req, res) => {
  const result = await CommitteeService.createCommittee(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Committee Created Successfully",
    data: result,
  });
});

const getAllCommittees = catchAsync(async (req, res) => {
  const result = await CommitteeService.getAllCommittees();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Committees retrieved Successfully",
    data: result,
  });
});

const getCommitteeById = catchAsync(async (req, res) => {
  const result = await CommitteeService.getCommitteeById(req.params.id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Committee retrieved Successfully",
    data: result,
  });
});

const updateCommittee = catchAsync(async (req, res) => {
  const result = await CommitteeService.updateCommittee(
    req.params.id,
    req.body,
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Committee updated Successfully",
    data: result,
  });
});

const deleteCommittee = catchAsync(async (req, res) => {
  await CommitteeService.deleteCommittee(req.params.id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Committee deleted Successfully",
    data: null,
  });
});

export const CommitteeController = {
  createCommittee,
  getAllCommittees,
  getCommitteeById,
  updateCommittee,
  deleteCommittee,
};
