import { z } from "zod"

export const insertJobexperienceSchema = z.object(
    {
        title: z
            .string()
            .min(1, "This Title is required.")
            ,

        companyName: z
            .string()
            .min(1, "This Company Name is required.")
        ,
        country: z
            .string()
            .min(1, "This Country is required.")
        ,
        city: z
            .string()
            .min(1, "This City is required.")
        ,
        state: z
            .string()
            .min(1, "This Stade is required.")
        ,
        description: z
            .string()
            .min(1, "This Description is required.")
        ,

        initialDate: z
            .string()
        ,
        endDate: z
            .string()
        ,
    }
)
