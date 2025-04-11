import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../middlewares/sendResponse";
import { ArticleService } from "./article.service";

const createArticle = catchAsync(async (req, res) => {
  const result = await ArticleService.createArticle(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Article Created Successfully",
    data: result,
  });
});

const getAllArticles = catchAsync(async (req, res) => {
  const result = await ArticleService.getAllArticles();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Articles Retrieved Successfully",
    data: result,
  });
});

const getSingleArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ArticleService.getArticleById(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Article Retrieved Successfully",
    data: result,
  });
});

const updateArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ArticleService.updateArticle(id, req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Article Updated Successfully",
    data: result,
  });
});

const deleteArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ArticleService.deleteArticle(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Article Deleted Successfully",
    data: null,
  });
});

export const ArticleController = {
  createArticle,
  getAllArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
};
