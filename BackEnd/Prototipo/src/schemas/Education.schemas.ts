import { z } from "zod";

export const educationSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  course: z.string().min(1),
  country: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  description: z.string().min(1),
  initialDate: z.string(),
  endDate: z.string(),
});

export const EducationSchema = educationSchema.omit({
  id: true,
});

export const EducationUpdateSchema = EducationSchema.partial();

export type typeExpectationEducation = z.infer<typeof EducationSchema>;
export type typeEducation = z.infer<typeof EducationSchema>;

export type typeUpdateExpectationEducation = Partial<typeExpectationEducation>;
export type typeUpdateEducation = Partial<typeEducation>;
