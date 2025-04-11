import mongoose, { Schema } from "mongoose";
import { IArticle } from "./article.interface";

const ArticleSchema: Schema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    thumbnailImage: { type: String, required: true },
    authorName: { type: String, required: true },
    bio: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

const ArticleModel = mongoose.model<IArticle>("Article", ArticleSchema);

export default ArticleModel;
