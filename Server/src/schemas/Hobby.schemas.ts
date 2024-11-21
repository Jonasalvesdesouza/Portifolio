import { z } from "zod";

const hobbySchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
});

const BodyHobbySchema = hobbySchema.omit({
  id: true,
});

const HobbyUpdate = BodyHobbySchema.partial();

export { hobbySchema, BodyHobbySchema, HobbyUpdate };
