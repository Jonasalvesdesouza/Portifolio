import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import { injectable } from "tsyringe";

import { prisma } from "../database/prisma";
import { AppError } from "../erros/appError";
import { UserReturnSchema } from "../schemas";
import {
  IBodyCreateUser,
  IBodypdateUser,
  IBodyLoginUser,
  IBodyUserReturn,
  IBodyLoginReturn,
} from "../interfaces";
import { jwtConfig } from "../configs";

@injectable()
class UserServices {
  async userRegister(body: IBodyCreateUser): Promise<IBodyUserReturn> {
    const hashedPassword = await hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });

    return UserReturnSchema.parse(newUser);
  }

  async login({ email, password }: IBodyLoginUser): Promise<IBodyLoginReturn> {
    const user = await prisma.user.findFirst({
      where: { email },
      include: { profile: true },
    });

    if (!user) {
      throw new AppError(404, "User not exists");
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new AppError(401, "Email and password doens't match");
    }

    const { secret, expiresIn } = jwtConfig();

    const token: string = sign({ id: user.id }, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      accessToken: token,
      user: UserReturnSchema.parse(user),
    };
  }

  async update(
    id: number,
    { email, password, name }: IBodypdateUser
  ): Promise<IBodypdateUser> {
    if (password) {
      const hashedPassword = await hash(password, 10);

      const user = await prisma.user.update({
        where: { id },
        data: { password: hashedPassword },
      });

      return UserReturnSchema.parse(user);
    }

    if (email) {
      const user = await prisma.user.update({
        where: { id },
        data: { email: email },
      });

      return UserReturnSchema.parse(user);
    }

    const user = await prisma.user.update({
      where: { id },
      data: { name: name },
    });

    return UserReturnSchema.parse(user);
  }

  async getUser(id: number): Promise<IBodyUserReturn> {
    const user = await prisma.user.findFirst({
      where: { id },
      include: { profile: true },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }
    
    return UserReturnSchema.parse(user);
  }
}

export { UserServices };
