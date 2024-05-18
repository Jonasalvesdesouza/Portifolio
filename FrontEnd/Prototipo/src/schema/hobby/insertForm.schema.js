import { z } from "zod"

export const insertHobbySchema = z.object(
    {
        name: z
            .string()
            .min(1, "This Hobby is required.")
            ,
    }
)
