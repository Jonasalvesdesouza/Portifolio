import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import { IHobby, IBodyHobby, IBodyUpdateHobby } from "../interfaces";

class HobbyServices {
  async create(body: IBodyHobby, profileId: number): Promise<IHobby> {
    const data = await prisma.hobby.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.hobby.findFirst({
      where: { id },
    });

    return data;
  }

  async findMany() {
    const data = await prisma.hobby.findMany();

    return data;
  }

  async Update(body: IBodyUpdateHobby, id: number): Promise<IHobby> {
    const data = await prisma.hobby.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.hobby.delete({ where: { id } });
  }
}

export { HobbyServices };
