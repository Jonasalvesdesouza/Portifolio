import { z } from "zod"

export const skillSchema = z.object(
    {
        id: z.number().positive(),
        name: z.string().min(1),
        category: z.string().min(1)
    }
)

export const SkillSchema = skillSchema.omit(
    {
        id: true
    }
) 

export const SkillUpdateSchema = SkillSchema.partial()

export type typeExpctationSkill = z.infer<typeof SkillSchema>
export type typeSkill = z.infer<typeof SkillSchema>

export type typeUpdateExpectSkill = Partial<typeExpctationSkill>
export type typeUpdateSkill = Partial<typeSkill>