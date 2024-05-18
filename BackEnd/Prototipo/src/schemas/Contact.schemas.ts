import { z } from "zod";

export const contactSchema = z.object({
  id: z.number().positive(),
  email: z.string(),
  cel: z.string(),
  profileId: z.number().positive().nullable(),
});

export const ContactSchema = contactSchema.omit({
  id: true,
  profileId: true,
});

export const ContactReturnSchema = contactSchema.omit({
  profileId: true,
});

export const ContactUpdateSchema = ContactSchema.partial();

export type typeExpectationContact = z.infer<typeof ContactSchema>;
export type typeContact = z.infer<typeof ContactSchema>;

export type typeUpdateContact = Partial<typeContact>;
export type typeUpdateContactExpct = Partial<typeContact>;
