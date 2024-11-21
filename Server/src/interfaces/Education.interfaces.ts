import { z } from "zod";
import { educationSchema, BodyEducationSchema } from "../schemas";

type IEducation = z.infer<typeof educationSchema>;
type IBodyEducation = z.infer<typeof BodyEducationSchema>;

type IbodyUpDateEducation = Partial<IBodyEducation>;

export { IEducation, IBodyEducation, IbodyUpDateEducation };
