import { z } from "zod";

const imageSchema = z.object({
  id: z.number().positive(),
  path: z.string().min(1),
});

const BodyImageSchema = imageSchema.omit({
  id: true,
});
const ImageUpdateSchema = BodyImageSchema.partial();

export { imageSchema, BodyImageSchema, ImageUpdateSchema };
