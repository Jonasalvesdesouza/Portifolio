import { z } from "zod"
import {

    contactSchema,
    userSchema,
    addressSchema,
    articlesSchema,
    educationSchema,
    hobiesSchema, 
    jobExperienceSchema, 
    messageSchema, 
    ImageSchema, 
    projectsSchema, 
    skillSchema, 
    socialMediaSchema, 

} from "./"


export const profileSchema = z.object(
    {
        id: z.number().positive(),
        presentation: z.string().min(1),
        about: z.string().min(1),
        bio: z.string().min(1),
        userId: z.number().positive(), 
        createdAt: z.date(),
        updatedAt: z.date(),

        contactId: z.number().positive().nullable(),
        anddressId: z.number().positive().nullish(),
        imageId: z.number().positive().nullish(), 
        
        socialMedia: z.array(socialMediaSchema).nullish(),
        hobbies: z.array(hobiesSchema).nullish(),
        skill: z.array(skillSchema).nullish(),
        jobExperience: z.array(jobExperienceSchema).nullish(),
        education: z.array(educationSchema).nullish(),
        projects: z.array(projectsSchema).nullish(),
        articles: z.array(articlesSchema).nullish(),
        message: z.array(messageSchema).nullish()
    }
)

export const ProfileSchema = profileSchema.pick(
    {
        presentation: true,
        about: true,
        bio: true,
        userId: true
    }
)

export const ProfileUpdateSchema = ProfileSchema.partial()

export const ProfileFullSchema = profileSchema.omit(
    {   
        userId: true,
        contactId: true,
        anddressId: true,
        imageId: true,
    }
).extend(
    {   
        user: userSchema.nullish(),
        contact: contactSchema.nullish(), 
        address: addressSchema.nullish(),
        image: ImageSchema.nullish(),
        
        socialMedia: z.array(socialMediaSchema).nullish(),
        hobbies: z.array(hobiesSchema).nullish(),
        skill: z.array(skillSchema).nullish(),
        jobExperience: z.array(jobExperienceSchema).nullish(),
        education: z.array(educationSchema).nullish(),
        projects: z.array(projectsSchema).nullish(),
        articles: z.array(articlesSchema).nullish(),
        message: z.array(messageSchema).nullish()
        
    }
)

export type typeCreateProfile = z.infer<typeof ProfileSchema> 
export type typeUpdateProfile = Partial<typeCreateProfile>
export type typeProfileFull = z.infer<typeof ProfileFullSchema>