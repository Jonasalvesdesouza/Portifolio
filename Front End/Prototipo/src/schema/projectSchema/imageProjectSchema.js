import { z } from "zod"

export const imageProjectchema = z.object(
    {
        name: z
            .string()
            .min(1, "This Title is required.")
            ,  
    }
)

