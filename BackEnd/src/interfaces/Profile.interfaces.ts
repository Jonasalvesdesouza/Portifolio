import { z } from "zod";
import {
  ProfileFullSchema,
  profileSchema,
  BodyProfileSchema,
} from "../schemas";

type Iprofile = z.infer<typeof profileSchema>;
type IBodyProfile = z.infer<typeof BodyProfileSchema>;
type IBodyUpdateProfile = Partial<IBodyProfile>;
type IBodyFullProfile = z.infer<typeof ProfileFullSchema>;

export { Iprofile, IBodyProfile, IBodyUpdateProfile, IBodyFullProfile };
