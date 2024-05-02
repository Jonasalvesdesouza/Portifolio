import { z } from "zod"

export const addressEducationSchema = z.object(
    {
        id: z.number().positive(),

        country: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),

        zipCode: z.string().min(1),
        road: z.string().min(1),
        neighborhood: z.string().min(1),
        number: z.number(),

        educationId: z.number().positive().nullish()
    }
)

export const AddressEducationSchema = addressEducationSchema.omit(
    {
        id: true,
    }
)

export const  AddressEducationReturnSchema = addressEducationSchema

export const AddressEducationUpdateSchema = AddressEducationSchema.partial()

export type typeExpectationAddressEducation = z.infer<typeof AddressEducationSchema>
export type typeAddressEducation = z.infer<typeof AddressEducationSchema>

export type typeUpdateAddressEducation = Partial<typeAddressEducation>
export type typeUpdateAddressExpectEducation = Partial<typeAddressEducation> 