import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import {
  ISocialMedia,
  IBodySocialMedia,
  IBodyUpdateSocialMedia,
} from "../interfaces";

class SocialMidiaServices {
  async create(
    body: IBodySocialMedia,
    profileId: number
  ): Promise<ISocialMedia> {
    const data = await prisma.socialMedia.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.socialMedia.findFirst({
      where: { id },
    });
    return data;
  }

  async findMany() {
    const data = await prisma.socialMedia.findMany();

    return data;
  }

  async Update(
    body: IBodyUpdateSocialMedia,
    id: number
  ): Promise<ISocialMedia> {
    const data = await prisma.socialMedia.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.socialMedia.delete({ where: { id } });
  }
}

export { SocialMidiaServices };
