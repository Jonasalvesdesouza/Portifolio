import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import { ISkill, IBodySkill, IBodyUpdateSkill } from "../interfaces";

class SkillServices {
  async create(body: IBodySkill, profileId: number): Promise<ISkill> {
    const data = await prisma.skill.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.skill.findFirst({
      where: { id },
    });

    return data;
  }

  async findMany() {
    const data = await prisma.skill.findMany();

    return data;
  }

  async Update(body: IBodyUpdateSkill, id: number): Promise<ISkill> {
    const data = await prisma.skill.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.skill.delete({ where: { id } });
  }
}

export { SkillServices };
