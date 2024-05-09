import { z } from "zod"

export const addressJobExperienceSchema = z.object(
    {
        id: z.number().positive(),

        country: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),

        zipCode: z.string().nullish(),
        road: z.string().nullish(),
        neighborhood: z.string().nullish(),
        number: z.number().nullish().nullish(),

        jobExperienceId: z.number().positive().nullish()
    }
)

export const AddressJobExperienceSchema = addressJobExperienceSchema.omit(
    {
        id: true,
    }
)

export const  AddressJobExperienceReturnSchema = addressJobExperienceSchema

export const AddressJobExperienceUpdateSchema = AddressJobExperienceSchema.partial()

export type typeExpectationAddressJobExperience = z.infer<typeof AddressJobExperienceSchema>
export type typeAddressJobExperience = z.infer<typeof AddressJobExperienceSchema>

export type typeUpdateAddressJobExperience = Partial<typeAddressJobExperience>
export type typeUpdateAddressExpectJobExperience = Partial<typeAddressJobExperience> 