import SendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.services";

const userLogin = catchAsync(async (req, res) => {
  const user = await UserServices.loginUser(req.body);
  const { accessToken } = user;

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Logged in Successfully",
    data: {
      accessToken,
    },
  });
});

export const UserControllers = {
  userLogin,
};
