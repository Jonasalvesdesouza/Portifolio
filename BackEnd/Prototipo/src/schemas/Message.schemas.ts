import { z } from "zod";

const messageSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(1),
  title: z.string().nullish(),
  description: z.string().min(1),
});

const MessageSchema = messageSchema.omit({
  id: true,
});

const MessageUpdateSchema = MessageSchema.partial();

type typeExpectationMessage = z.infer<typeof MessageSchema>;
type typeMessage = z.infer<typeof MessageSchema>;

export {
  messageSchema,
  MessageSchema,
  MessageUpdateSchema,
  typeExpectationMessage,
  typeMessage,
};
