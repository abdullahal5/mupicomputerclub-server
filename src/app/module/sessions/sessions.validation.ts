import { z } from "zod";

export const createSessionValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    instructorName: z.string().min(1, " Instructor Name is required"),
    images: z.array(z.string()).min(1, "At least one image is required"),
    status: z.string().min(1, "Status is required"),
    date: z.string().min(1, "Date is required"),
    endTime: z.string().min(1, "End time is required"),
    startTime: z.string().min(1, "Start time is required"),
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
    eligibilityCriteria: z
      .array(z.string())
      .min(1, "At least one eligibility criterion is required"),
  }),
});

export const updateSessionValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").optional(),
    images: z
      .array(z.string())
      .min(1, "At least one image is required")
      .optional(),
    status: z.string().min(1, "Status is required").optional(),
    date: z.string().min(1, "Date is required").optional(),
    endTime: z.string().min(1, "End time is required").optional(),
    startTime: z.string().min(1, "Start time is required").optional(),
    location: z.string().min(1, "Location is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    eligibilityCriteria: z
      .array(z.string())
      .min(1, "At least one eligibility criterion is required")
      .optional(),
  }),
});