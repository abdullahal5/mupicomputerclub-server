import express from "express";
import auth, { USER_ROLE } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { createArticleSchema, updateArticleSchema } from "./article.validation";
import { ArticleController } from "./article.controller";

const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.admin),
  validateRequest(createArticleSchema),
  ArticleController.createArticle,
);

router.get("/get-all", ArticleController.getAllArticles);

router.get("/get-single/:id", ArticleController.getSingleArticle);

router.put(
  "/update/:id",
  validateRequest(updateArticleSchema),
  ArticleController.updateArticle,
);
router.delete("/delete/:id", ArticleController.deleteArticle);

export const ArticleRoutes = router;
