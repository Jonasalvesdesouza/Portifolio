import { z } from "zod";
import { hobbySchema } from "../schemas";
import { BodyHobbySchema } from "../schemas/Hobby.schemas";

type IHobby = z.infer<typeof hobbySchema>;
type IBodyHobby = z.infer<typeof BodyHobbySchema>;
type IBodyUpdateHobby = Partial<IBodyHobby>;

export { IHobby, IBodyHobby, IBodyUpdateHobby };
