import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth, { USER_ROLE } from "../../middlewares/auth";
import { ExecutiveController } from "./executives.controller";
import { createExecutiveSchema, updateExecutiveSchema } from "./executives.validation";
const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.admin),
  validateRequest(createExecutiveSchema),
  ExecutiveController.createExecutive,
);

router.get(
  "/get-all",
  ExecutiveController.getAllExecutives,
);

router.get("/get-single/:id", ExecutiveController.getSingleExecutive);

router.put(
  "/update/:id",
  auth(USER_ROLE.admin),
  validateRequest(updateExecutiveSchema),
  ExecutiveController.updateExecutive,
);

router.delete(
  "/delete/:id",
  auth(USER_ROLE.admin),
  ExecutiveController.hardDeleteExecutive,
);

export const ExecutiveRoutes = router;
