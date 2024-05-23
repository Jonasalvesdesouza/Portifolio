import { z } from "zod";
import { BodyJobExperienceSchema, jobExperienceSchema } from "../schemas";

type IJobExperience = z.infer<typeof jobExperienceSchema>;
type IbodyJobExperience = z.infer<typeof BodyJobExperienceSchema>;
type IbodyUpateJobExperience = Partial<IbodyJobExperience>;

export { IJobExperience, IbodyJobExperience, IbodyUpateJobExperience };
