import SendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { ContactServices } from "./contact.service";

const sendEmail = catchAsync(async (req, res) => {
  const result = await ContactServices.sendEmailByNodeMailer(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Email sent successfully",
    data: result,
  });
});


export const ContactController = {
  sendEmail,
};
