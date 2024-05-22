import { z } from "zod";

const skillSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  category: z.string().min(1),
});

const SkillSchema = skillSchema.omit({
  id: true,
});

const SkillUpdateSchema = SkillSchema.partial();

type typeExpctationSkill = z.infer<typeof SkillSchema>;
type typeSkill = z.infer<typeof SkillSchema>;

type typeUpdateExpectSkill = Partial<typeExpctationSkill>;
type typeUpdateSkill = Partial<typeSkill>;

export {
  skillSchema,
  SkillSchema,
  SkillUpdateSchema,
  typeExpctationSkill,
  typeSkill,
  typeUpdateExpectSkill,
  typeUpdateSkill,
};
