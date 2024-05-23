import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";

import {
  IBodyProfile,
  IBodyUpdateProfile,
  IBodyFullProfile,
} from "../interfaces";
import { AppError } from "../erros";

@injectable()
class ProfileServices {
  async create(
    body: IBodyProfile,
    userId: number,
    userName: string
  ): Promise<IBodyProfile> {
    const data = await prisma.profile.create({
      data: {
        ...body,
        userId,
        userName,
      },
    });

    return data;
  }

  async findFirst(): Promise<IBodyFullProfile | null> {
    const data = await prisma.profile.findFirst({
      include: {
        contact: true,
        image: true,
        socialMedia: true,
        hobby: true,
        skill: true,
        jobExperience: {},
        education: {},
        projects: {
          include: {
            image: true,
          },
        },
        articles: {
          include: {
            image: true,
          },
        },
        message: true,
      },
    });

    return data;
  }

  async update(
    id: number,
    body: IBodyUpdateProfile
  ): Promise<IBodyUpdateProfile> {
    const data = await prisma.profile.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    const profile = await prisma.profile.findFirst({
      where: { id },
    });
    await prisma.profile.delete({ where: { id } });
  }
}

export { ProfileServices };
