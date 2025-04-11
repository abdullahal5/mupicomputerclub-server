import { z } from "zod";

export const createArticleSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    thumbnailImage: z.string().min(1, "Thumbnail image is required"),
    authorName: z.string().min(1, "Author name is required"),
    bio: z.string().min(1, "Bio is required"),
    content: z.string().min(1, "Content is required"),
  }),
});

export const updateArticleSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    thumbnailImage: z.string().optional(),
    authorName: z.string().optional(),
    bio: z.string().optional(),
    content: z.string().optional(),
  }),
});
