import { z } from "zod";

export const jobExperienceSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  companyName: z.string().min(1),
  country: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  description: z.string().min(1),
  initialDate: z.string(),
  endDate: z.string(),
});

export const JobExperienceSchema = jobExperienceSchema.omit({
  id: true,
});

export const JobExperienceUpdateSchema = JobExperienceSchema.partial();

export type typeExpectationJobExperience = z.infer<typeof JobExperienceSchema>;
export type typeJobExperience = z.infer<typeof JobExperienceSchema>;

export type typeUpdateExpectationJobExperience =
  Partial<typeExpectationJobExperience>;
export type typeUpdateJobExperience = Partial<typeJobExperience>;
