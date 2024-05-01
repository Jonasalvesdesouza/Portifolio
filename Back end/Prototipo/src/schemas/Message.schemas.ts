import { z } from "zod"

export const messageSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        email: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1)
    }
)