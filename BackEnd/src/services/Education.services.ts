import { exec } from "child_process";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import {
  IEducation,
  IBodyEducation,
  IbodyUpDateEducation,
} from "../interfaces";

class EducationServices {
  async create(body: IBodyEducation, profileId: number): Promise<IEducation> {
    const data = await prisma.education.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.education.findFirst({
      where: { id },
    });
    return data;
  }

  async findMany() {
    const data = await prisma.education.findMany();

    return data;
  }

  async Update(body: IbodyUpDateEducation, id: number): Promise<IEducation> {
    const data = await prisma.education.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    const education = await prisma.education.findFirst({
      where: { id },
    });

    if (!education) {
      throw new AppError(404, "Education not foud");
    }

    await prisma.education.delete({ where: { id } });
  }
}

export { EducationServices };
