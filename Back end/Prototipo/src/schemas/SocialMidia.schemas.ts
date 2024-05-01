import { z } from "zod"

export const socialMediaSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        imageId: z.number().positive().nullish()
    }
)