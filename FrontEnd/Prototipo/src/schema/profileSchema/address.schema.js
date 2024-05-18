import { z } from 'zod';

export const addressSchema = z.object({
  country: z.string().min(1, 'This name is required.'),
  city: z.string().min(1, 'This email is required.'),
  state: z.string().min(1, 'This message is required.'),
  zipCode: z.string().min(1, 'This message is required.'),
  road: z.string().min(1, 'This message is required.'),
  number: z.string().min(1, 'This message is required.'),
  neighborhood: z.string().min(1, 'This neighborhood is required'),
});
