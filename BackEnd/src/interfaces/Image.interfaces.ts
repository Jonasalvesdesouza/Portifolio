import { z } from "zod";
import { BodyImageSchema, imageSchema } from "../schemas";

type IImage = z.infer<typeof imageSchema>;
type IBodyImage = z.infer<typeof BodyImageSchema>;

type IBodyUpdateImage = Partial<IBodyImage>;

export { IImage, IBodyImage, IBodyUpdateImage };
