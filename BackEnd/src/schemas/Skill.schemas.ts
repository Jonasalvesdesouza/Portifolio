import { z } from "zod";

const skillSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  category: z.string().min(1),
});

const BodySkillSchema = skillSchema.omit({
  id: true,
});

const SkillUpdateSchema = BodySkillSchema.partial();

export { skillSchema, BodySkillSchema, SkillUpdateSchema };
