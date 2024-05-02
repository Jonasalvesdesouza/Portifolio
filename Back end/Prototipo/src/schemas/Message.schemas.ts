import { z } from "zod"

export const messageSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        email: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1)
    }
)


export const MessageSchema = messageSchema.omit(
    {
        id: true
    }
)

export const MessageUpdateSchema = MessageSchema.partial()

export type typeExpectationMessage = z.infer<typeof MessageSchema>
export type typeMessage = z.infer<typeof MessageSchema>