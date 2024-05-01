import { z } from "zod"

export const articlesSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        description: z.string().min(1),
        category: z.string().min(1),
        imageId: z.number().positive().nullish()
    }
)