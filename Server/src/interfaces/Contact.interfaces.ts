import { z } from "zod";
import { ContactBodySchema, contactSchema } from "../schemas";

type IContact = z.infer<typeof contactSchema>;
type IBodyContact = z.infer<typeof ContactBodySchema>;
type IUpdateBodyContact = Partial<IBodyContact>;

export { IContact, IBodyContact, IUpdateBodyContact };
