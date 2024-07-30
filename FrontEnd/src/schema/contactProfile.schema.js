import { z } from 'zod';

export const contactProfileSchema = z.object({
  email: z.string().min(1, 'This email is required.'),
  cel: z.string().min(1, 'this cel is required.'),
});
