import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import {
  IJobExperience,
  IbodyJobExperience,
  IbodyUpateJobExperience,
} from "../interfaces";

class JobExperienceServices {
  async create(
    body: IbodyJobExperience,
    profileId: number
  ): Promise<IJobExperience> {
    const data = await prisma.jobExperience.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.jobExperience.findFirst({
      where: { id },
    });
    return data;
  }

  async findMany() {
    const data = await prisma.jobExperience.findMany();

    return data;
  }

  async Update(
    body: IbodyUpateJobExperience,
    id: number
  ): Promise<IJobExperience> {
    const data = await prisma.jobExperience.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.jobExperience.delete({ where: { id } });
  }
}

export { JobExperienceServices };
