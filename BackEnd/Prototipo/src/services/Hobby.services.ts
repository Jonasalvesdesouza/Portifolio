import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import { IHobby, IBodyHobby, IBodyUpdateHobby } from "../interfaces";

class HobbyServices {
  async create(body: IBodyHobby, userId: number): Promise<IHobby> {
    if (!userId) {
      throw new AppError(409, "User ID is required");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const hobby = await prisma.hobby.findFirst({
      where: { name: body.name },
    });

    if (hobby) {
      throw new AppError(404, "Hobby already exists");
    }

    const data = await prisma.hobby.create({
      data: {
        ...body,
        profileId: profile.id,
      },
    });

    return data;
  }

  async getOne(id: number) {
    if (!id) {
      throw new AppError(404, "Id not found");
    }

    const data = await prisma.hobby.findFirst({
      where: { id },
    });

    if (!data) {
      throw new AppError(404, "Hobby midia not found");
    }

    return data;
  }

  async findMany() {
    const data = await prisma.hobby.findMany();

    return data;
  }

  async Update(
    body: IBodyUpdateHobby,
    userId: number,
    id: number
  ): Promise<IHobby> {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const hobby = await prisma.hobby.findFirst({
      where: { id },
    });

    if (!hobby) {
      throw new AppError(404, "Hobby not foud");
    }

    const data = await prisma.hobby.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    const hooby = await prisma.hobby.findFirst({
      where: { id },
    });
    if (!hooby) {
      throw new AppError(404, "Hobby Media not foud");
    }

    await prisma.hobby.delete({ where: { id } });
  }
}

export { HobbyServices };
