import { z } from "zod";

const jobExperienceSchema = z.object({
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

const JobExperienceSchema = jobExperienceSchema.omit({
  id: true,
});

const JobExperienceUpdateSchema = JobExperienceSchema.partial();

type typeExpectationJobExperience = z.infer<typeof JobExperienceSchema>;
type typeJobExperience = z.infer<typeof JobExperienceSchema>;

type typeUpdateExpectationJobExperience = Partial<typeExpectationJobExperience>;
type typeUpdateJobExperience = Partial<typeJobExperience>;

export {
  jobExperienceSchema,
  JobExperienceSchema,
  JobExperienceUpdateSchema,
  typeExpectationJobExperience,
  typeJobExperience,
  typeUpdateExpectationJobExperience,
  typeUpdateJobExperience,
};
