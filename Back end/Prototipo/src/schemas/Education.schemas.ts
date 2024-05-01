import { title } from "process"
import { z } from "zod"

export const educationSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        couser: z.string().min(1),
        description: z.string().min(1),
        initialDate: z.date(),
        endDate: z.date(),
        addressId: z.number().positive().nullish(),
    }
) 