import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(8),
  profileId: z.number().positive().nullish(),
});

export const UserSchema = userSchema.omit({
  id: true,
  profileId: true,
});

export const PromiseUserSchema = userSchema.omit({ profileId: true });

export const LoginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

export const UserReturnSchema = userSchema.omit({
  password: true,
});

export type typePromiseUserSchema = z.infer<typeof PromiseUserSchema>;
export type typeCreateUser = z.infer<typeof UserSchema>;
export type typeUpdateUser = Partial<typeCreateUser>;

export type typeLoginUser = z.infer<typeof LoginUserSchema>;
export type typeUserReturnSchema = z.infer<typeof UserReturnSchema>;

export type typeLoginReturn = {
  accessToken: string;
  user: typeUserReturnSchema;
};
