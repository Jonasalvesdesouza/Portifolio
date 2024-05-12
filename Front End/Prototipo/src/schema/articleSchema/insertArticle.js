import { z } from "zod"

export const insertArticleSchema = z.object(
    {
        title: z
            .string()
            .min(1, "This Title is required.")
            ,

        category: z
            .string()
            .min(1, "This Category is required.")
        ,

        description: z
            .string()
            .min(1, "This Description is required.")
        ,
    }
)
