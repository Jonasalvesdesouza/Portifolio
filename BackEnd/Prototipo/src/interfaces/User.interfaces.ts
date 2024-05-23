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

type IUser = z.infer<typeof userSchema>;
type IBodyCreateUser = z.infer<typeof UserSchema>;
type IBodypdateUser = Partial<IBodyCreateUser>;

type IBodyLoginUser = z.infer<typeof LoginUserSchema>;
type IBodyUserReturn = z.infer<typeof UserReturnSchema>;

type IBodyLoginReturn = {
  accessToken: string;
  user: IBodyUserReturn;
};

export {
  IUser,
  IBodyCreateUser,
  IBodypdateUser,
  IBodyLoginUser,
  IBodyUserReturn,
  IBodyLoginReturn,
};
