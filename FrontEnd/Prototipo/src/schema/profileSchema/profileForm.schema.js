import { z } from 'zod';

export const profileFormSchema = z.object({
  profession: z.string().min(1, 'This name is required.'),
  presentation: z.string().min(1, 'This email is required.'),
  about: z.string().min(1, 'This message is required.'),
  bio: z.string().min(1, 'This message is required.'),
});
