import { z } from "zod";

export const createEventValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    images: z.array(z.string()).min(1, "At least one image is required"),
    status: z.string().min(1, "Status is required"),
    date: z.string().min(1, "Date is required"),
    instructorName: z.string(),
    endTime: z.string().min(1, "End date is required"),
    startTime: z.string().min(1, "Start date is required"),
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
    sponsorLogos: z.array(z.string()).optional(),
    eligibilityCriteria: z
      .array(z.string())
      .min(1, "At least one eligibility criterion is required"),
  }),
});

export const updateEventValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").optional(),
    images: z
      .array(z.string())
      .min(1, "At least one image is required")
      .optional(),
    status: z.string().min(1, "Status is required").optional(),
    instructorName: z.string().optional(),
    date: z.string().min(1, "Date is required").optional(),
    endTime: z.string().min(1, "End date is required").optional(),
    startTime: z.string().min(1, "Start date is required").optional(),
    location: z.string().min(1, "Location is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    sponsorLogos: z.array(z.string()).optional(),
    eligibilityCriteria: z
      .array(z.string())
      .min(1, "At least one eligibility criterion is required")
      .optional(),
  }),
});