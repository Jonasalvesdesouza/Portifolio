import { z } from 'zod'

export const sendMeEmailFormSchema = z.object({
    name: z
        .string()
        .min(1, 'This field is required.')
    ,
    email: z
        .string()
        .email('Provide a Valid E-Mail.')
        .min(1, 'This field is required.')
    ,
    message: z
    .string()
    .min(1, 'This field is required.')
    .max(350, 'You have reached the maximum character limit')
}) 