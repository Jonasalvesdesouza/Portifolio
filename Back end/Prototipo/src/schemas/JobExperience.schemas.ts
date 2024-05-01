import { z } from "zod"

export const jobExperienceSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        CompanyName: z.string().min(1),
        description: z.string().min(1),
        initialDate: z.date(),
        endDate: z.date(),      
        addressId: z.number().positive().nullish(),
    }
)