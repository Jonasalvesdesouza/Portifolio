import { z } from "zod"

export const hobbySchema = z.object(

    {
        id: z.number().positive(),
        name: z.string().min(1),
    }
    
)

export const HobbySchema = hobbySchema.omit(
    {
        id: true
    }
)

export const HobbyUpdate = HobbySchema.partial()

export type typeExpectationHobby = z.infer<typeof HobbySchema>
export type typeHobby = z.infer<typeof HobbySchema>

export type typeExpectUpdateHobby = Partial<typeExpectationHobby>
export type typeUpdateHobby = Partial<typeHobby>