import { z } from "zod";

const messageSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(1),
  title: z.string().nullish(),
  description: z.string().min(1),
});

const BodyMessageSchema = messageSchema.omit({
  id: true,
});

const MessageUpdateSchema = BodyMessageSchema.partial();

export { messageSchema, BodyMessageSchema, MessageUpdateSchema };
