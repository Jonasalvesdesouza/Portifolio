import { z } from "zod"

export const educationSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        couser: z.string().min(1),
        description: z.string().min(1),
        initialDate: z.string(),
        endDate: z.string(),
        addressId: z.number().positive().nullish(),
    }
)

export const EducationSchema = educationSchema.omit(
    {
        id:true
    }
)

export const EducationUpdateSchema = EducationSchema.partial()

export type typeExpectationEducation = z.infer<typeof EducationSchema>
export type typeEducation = z.infer<typeof EducationSchema>

export type typeUpdateExpectationEducation = Partial<typeExpectationEducation>
export type typeUpdateEducation = Partial<typeEducation>