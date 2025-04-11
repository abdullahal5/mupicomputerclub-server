import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { contactSchema } from "./contact.validation";
import { ContactController } from "./contact.controller";
const router = express.Router();

router.post(
  "/send-email",
  validateRequest(contactSchema),
  ContactController.sendEmail,
);

export const ContactRouter = router;
