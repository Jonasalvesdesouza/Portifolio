import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(8),
  profileId: z.number().positive().nullish(),
  AdmId: z.number().positive().nullish(),
});

const UserSchema = userSchema.omit({
  id: true,
  profileId: true,
});

const LoginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

const UserReturnSchema = userSchema.omit({
  password: true,
});

export { userSchema, UserSchema, LoginUserSchema, UserReturnSchema };
