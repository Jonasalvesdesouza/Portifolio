import { z } from "zod";

export const projectsSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        description: z.string().min(1),
        imageId: z.number().positive().nullish(),
        category: z.string().min(1),
        subCategory: z.string().min(1),
    }
)