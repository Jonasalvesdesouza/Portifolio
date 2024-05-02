import { z } from "zod"

export const jobExperienceSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        CompanyName: z.string().min(1),
        description: z.string().min(1),
        initialDate: z.string(),
        endDate: z.string(),      
        addressId: z.number().positive().nullish(),
    }
)

export const JobExperienceSchema = jobExperienceSchema.omit(
    {
        id: true
    }
)

export const JobExperienceUpdateSchema = JobExperienceSchema.partial()

export type typeExpectationJobExperience = z.infer<typeof JobExperienceSchema>
export type typeJobExperience = z.infer<typeof JobExperienceSchema>

export type typeUpdateExpectationJobExperience = Partial<typeExpectationJobExperience>
export type typeUpdateJobExperience = Partial<typeJobExperience>