import { exec } from "child_process";
import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(8),
  profileId: z.number().positive().nullish(),
});

const UserSchema = userSchema.omit({
  id: true,
  profileId: true,
});

const PromiseUserSchema = userSchema.omit({ profileId: true });

const LoginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

const UserReturnSchema = userSchema.omit({
  password: true,
});

type typePromiseUserSchema = z.infer<typeof PromiseUserSchema>;
type typeCreateUser = z.infer<typeof UserSchema>;
type typeUpdateUser = Partial<typeCreateUser>;

type typeLoginUser = z.infer<typeof LoginUserSchema>;
type typeUserReturnSchema = z.infer<typeof UserReturnSchema>;

type typeLoginReturn = {
  accessToken: string;
  user: typeUserReturnSchema;
};

export {
  userSchema,
  UserSchema,
  PromiseUserSchema,
  LoginUserSchema,
  UserReturnSchema,
  typePromiseUserSchema,
  typeCreateUser,
  typeUpdateUser,
  typeLoginUser,
  typeUserReturnSchema,
  typeLoginReturn,
};
