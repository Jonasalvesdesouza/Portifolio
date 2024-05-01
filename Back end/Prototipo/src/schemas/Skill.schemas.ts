import { z } from "zod"

export const skillSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        imageId: z.number().positive().nullish(),
        category: z.string().min(1)
    }
)
