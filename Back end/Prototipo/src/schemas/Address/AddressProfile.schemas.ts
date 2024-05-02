import { z } from "zod"

export const addressProfileSchema = z.object(
    {
        id: z.number().positive(),

        country: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),

        zipCode: z.string().min(1),
        road: z.string().min(1),
        neighborhood: z.string().min(1),
        number: z.number(),
    }
)

export const AddressProfileSchema = addressProfileSchema.omit(
    {
        id: true,
    }
)

export const  AddressProfileReturnSchema = addressProfileSchema

export const AddressProfileUpdateSchema = AddressProfileSchema.partial()

export type typeExpectationAddressProfile = z.infer<typeof AddressProfileSchema>
export type typeAddressProfile = z.infer<typeof AddressProfileSchema>

export type typeUpdateAddressProfile = Partial<typeAddressProfile>
export type typeUpdateAddressExpectProfile = Partial<typeAddressProfile> 