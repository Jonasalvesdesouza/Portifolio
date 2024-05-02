import { z } from "zod"

export const socialMediaSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        link: z.string().min(1)
    }
)

export const SocialMediaSchema = socialMediaSchema.omit(
    {
        id: true
    }
)

export const SocialMediaUpdateSchema = SocialMediaSchema.partial()

export type typeExpectationSocialMedia = z.infer<typeof SocialMediaSchema>
export type typeSocialMedia = z.infer<typeof SocialMediaSchema>

export type typeUpdateSocialmediaExpct = Partial<typeExpectationSocialMedia>
export type typeUpdateSocialMedia = Partial<typeSocialMedia>