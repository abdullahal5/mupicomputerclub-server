import express from "express"
import auth, { USER_ROLE } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { EventController } from "./event.controller";
import { createEventValidationSchema, updateEventValidationSchema } from "./event.validation";

const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.admin),
  validateRequest(createEventValidationSchema),
  EventController.createEvent,
);

router.get(
  "/get-all",
  EventController.getAllEvents,
);

router.get(
  "/get-single/:id",
  EventController.getEventById,
);

router.put(
  "/update/:id",
  validateRequest(updateEventValidationSchema),
  EventController.updateEvent,
);
router.delete(
  "/delete/:id",
  EventController.deleteEvent,
);

export const eventRoutes = router;
