import { z } from "zod";
import { BodySkillSchema, skillSchema } from "../schemas";

type ISkill = z.infer<typeof skillSchema>;
type IBodySkill = z.infer<typeof BodySkillSchema>;
type IBodyUpdateSkill = Partial<IBodySkill>;

export { ISkill, IBodySkill, IBodyUpdateSkill };
