import { z } from 'zod';

export const insertSkillSchema = z.object({
  name: z.string().min(1, 'This Skill is required.'),
  category: z.string().min(1, 'This Category is required.'),
});
