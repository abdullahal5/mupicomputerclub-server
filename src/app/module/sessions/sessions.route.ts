import express from "express";
import auth, { USER_ROLE } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { SessionController } from "./sessions.controller";
import { createSessionValidationSchema, updateSessionValidationSchema } from "./sessions.validation";

const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.admin),
  validateRequest(createSessionValidationSchema),
  SessionController.createSession,
);

router.get("/get-all", SessionController.getAllSessions);

router.get("/get-single/:id", SessionController.getSessionById);

router.put(
  "/update/:id",
  validateRequest(updateSessionValidationSchema),
  SessionController.updateSession,
);

router.delete("/delete/:id", SessionController.deleteSession);

export const sessionRoutes = router;
