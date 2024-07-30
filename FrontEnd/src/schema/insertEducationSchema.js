import { z } from 'zod';

export const insertEducationSchema = z.object({
  title: z.string().min(1, 'This Institution is required.'),
  course: z.string().min(1, 'This Course is required.'),
  country: z.string().min(1, 'This Country is required.'),
  city: z.string().min(1, 'This City is required.'),
  state: z.string().min(1, 'This Stade is required.'),
  description: z.string().min(1, 'This Description is required.'),
  initialDate: z.string(),
  endDate: z.string(),
});
