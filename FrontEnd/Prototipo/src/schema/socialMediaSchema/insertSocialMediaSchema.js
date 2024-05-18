import { z } from "zod"

export const insertSocialMediaSchema = z.object(
    {
        name: z
            .string()
            .min(1, "This SocialMedia is required.")
            ,

        link: z
            .string()
            .min(1, "This Link is required.")
        ,
    }
)
