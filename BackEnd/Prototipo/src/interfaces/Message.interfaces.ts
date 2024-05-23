import { z } from "zod";
import { BodyMessageSchema, messageSchema } from "../schemas";

type IMessage = z.infer<typeof messageSchema>;
type IBodyMessage = z.infer<typeof BodyMessageSchema>;

export { IMessage, IBodyMessage };
