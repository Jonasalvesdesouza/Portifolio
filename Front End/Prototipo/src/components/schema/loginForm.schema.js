import { z } from "zod"

export const loginFormSchema = z.object({
    username: z
        .string()
        .min(1, "Este campo é obrigatório.")
        ,

    password: z
        .string()
        .min(1, "Este campo é obrigatório.")        
        ,
})
