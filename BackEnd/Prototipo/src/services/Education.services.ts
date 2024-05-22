import { exec } from "child_process";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import {
  typeExpectationEducation,
  typeEducation,
  typeUpdateExpectationEducation,
  typeUpdateEducation,
} from "../schemas";

class EducationServices {
  async create(
    body: typeEducation,
    userId: number
  ): Promise<typeExpectationEducation> {
    if (!userId) {
      throw new AppError(409, "User ID is required");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const education = await prisma.education.findFirst({
      where: {
        title: body.title,
      },
    });

    if (education) {
      throw new AppError(404, "Education already exists");
    }

    const data = await prisma.education.create({
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

    const data = await prisma.education.findFirst({
      where: { id },
    });

    if (!data) {
      throw new AppError(404, "Education not found");
    }

    return data;
  }

  async findMany() {
    const data = await prisma.education.findMany();

    return data;
  }

  async Update(
    body: typeUpdateEducation,
    userId: number,
    id: number
  ): Promise<typeUpdateExpectationEducation> {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const education = await prisma.education.findFirst({
      where: { id },
    });

    if (!education) {
      throw new AppError(404, "Education not foud");
    }

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
