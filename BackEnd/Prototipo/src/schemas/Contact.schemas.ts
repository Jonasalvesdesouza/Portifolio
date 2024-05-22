import { z } from "zod";

const contactSchema = z.object({
  id: z.number().positive(),
  email: z.string(),
  cel: z.string(),
  profileId: z.number().positive().nullable(),
});

const ContactBodySchema = contactSchema.omit({
  id: true,
});

const ContactUpdateSchema = contactSchema.partial();

export { contactSchema, ContactBodySchema, ContactUpdateSchema };
