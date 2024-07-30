import { z } from 'zod';

export const insertProjectSchema = z.object({
  title: z.string().min(1, 'This Title is required.'),
  description: z.string().min(1, 'This Description is required.'),
  webSite: z.string().min(1, 'This webSite is required.'),
  gitHub: z.string().min(1, 'This GitHub is required.'),
  category: z.string().min(1, 'This Category is required.'),
  subCategory: z.string().min(1, 'This Subcategory is required.'),
});
