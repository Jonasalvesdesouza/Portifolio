import { z } from "zod"

export const addressSchema = z.object(
    {
        id: z.number().positive(),

        country: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),

        zipCode: z.string().min(1).nullish(),
        road: z.string().min(1).nullish(),
        neighborhood: z.string().min(1).nullish(),

        profileId: z.number().positive().nullable(),
        jobExperienceId: z.number().positive().nullable(),
        educationId: z.number().positive().nullable()

    }
)

export const AddressSchema = addressSchema.omit(
    {
        id: true,
        profileId: true,
        jobExperienceId: true,
        educationId: true
    }
)

export const  AddressReturnSchema = addressSchema.omit(
    {
        profileId: true,
        jobExperienceId: true,
        educationId: true
    }
)

export const AddressUpdateSchema = AddressSchema.partial()

export type typeExpectationAddress = z.infer<typeof AddressSchema>
export type typeAddress = z.infer<typeof AddressSchema>

export type typeUpdateAddress = Partial<typeAddress>
export type typeUpdateAddressExpect = Partial<typeAddress> 