import express from "express";
import auth, { USER_ROLE } from "../../middlewares/auth";
import { CommitteeController } from "./committee's.controller";

const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.admin),
  CommitteeController.createCommittee,
);

router.get("/get-all", CommitteeController.getAllCommittees);

router.get("/:id", CommitteeController.getCommitteeById);

router.put(
  "/update/:id",
  auth(USER_ROLE.admin),
  CommitteeController.updateCommittee,
);

router.delete(
  "/delete/:id",
  auth(USER_ROLE.admin),
  CommitteeController.deleteCommittee,
);

export const CommitteeRoutes = router;
