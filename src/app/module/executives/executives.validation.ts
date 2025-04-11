export const developerPositions = [
  { name: "Web Developer", value: "web_developer" },
  { name: "App Developer", value: "app_developer" },
  { name: "Frontend Developer", value: "frontend_developer" },
  { name: "Backend Developer", value: "backend_developer" },
  { name: "Full Stack Developer", value: "fullstack_developer" },
  { name: "UI/UX Designer", value: "ui_ux_designer" },
  { name: "DevOps Engineer", value: "devops_engineer" },
  { name: "Software Engineer", value: "software_engineer" },
  { name: "Game Developer", value: "game_developer" },
  { name: "Embedded Systems Developer", value: "embedded_developer" },
];

import { z } from "zod";

const roleTypes = ["advisor", "mentor", "developer"] as const;

const roleByType: Record<(typeof roleTypes)[number], string[]> = {
  advisor: ["advisor", "mentor"],
  mentor: [
    "president",
    "vice president",
    "secretary",
    "general secretary",
    "event co-ordinator",
    "treasurer",
    "technical team lead",
  ],
  developer: developerPositions.map((dev) => dev.value),
};

const createExecutiveSchema = z.object({
  body: z
    .object({
      profileImage: z.string().url("Invalid profile image URL"),
      fullName: z.string().min(1, "Full name is required"),
      contact: z.string().min(10, "Contact must be at least 10 digits"),
      email: z.string().email("Invalid email address"),
      communitySession: z.string().min(1, "communitySession is required"),
      session: z.string().min(1, "Session is required"),
      roleType: z.enum(roleTypes),
      role: z.string().min(1, "Role is required"),
      linkedin: z.string().url("Invalid LinkedIn URL").optional(),
      facebook: z.string().url("Invalid Facebook URL").optional(),
      twitter: z.string().url("Invalid Twitter URL").optional(),
    })
    .superRefine((data, ctx) => {
      const { roleType, role } = data;
      if (roleType && role && !roleByType[roleType]?.includes(role)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["role"],
          message: "Invalid role for the selected role type",
        });
      }
    }),
});

const updateExecutiveSchema = z.object({
  body: z
    .object({
      profileImage: z.string().url("Invalid profile image URL").optional(),
      fullName: z.string().min(1, "Full name is required").optional(),
      contact: z
        .string()
        .min(10, "Contact must be at least 10 digits")
        .optional(),
      email: z.string().email("Invalid email address").optional(),
      roll: z.string().min(1, "Roll is required").optional(),
      session: z.string().min(1, "Session is required").optional(),
      roleType: z.enum(roleTypes).optional(),
      role: z.string().min(1, "Role is required").optional(),
      linkedin: z.string().url("Invalid LinkedIn URL").optional(),
      facebook: z.string().url("Invalid Facebook URL").optional(),
      twitter: z.string().url("Invalid Twitter URL").optional(),
    })
    .superRefine((data, ctx) => {
      const { roleType, role } = data;
      if (roleType && role && !roleByType[roleType]?.includes(role)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["role"],
          message: "Invalid role for the selected role type",
        });
      }
    }),
});

export { createExecutiveSchema, updateExecutiveSchema };
