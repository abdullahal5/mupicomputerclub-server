import { IArticle } from "./article.interface";
import ArticleModel from "./article.model";

const createArticle = async (articleData: IArticle) => {
  return await ArticleModel.create(articleData);
};

const updateArticle = async (
  id: string,
  updateData: Partial<IArticle> | undefined,
) => {
  return await ArticleModel.findByIdAndUpdate(id, updateData, { new: true });
};

const getAllArticles = async () => {
  return await ArticleModel.find().sort({ createdAt: -1 });
};

const getArticleById = async (id: string) => {
  return await ArticleModel.findOne({ _id: id });
};

const deleteArticle = async (id: string) => {
  return await ArticleModel.findByIdAndDelete(id);
};

export const ArticleService = {
  createArticle,
  updateArticle,
  getAllArticles,
  getArticleById,
  deleteArticle,
};
