import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import {
  ISocialMedia,
  IBodySocialMedia,
  IBodyUpdateSocialMedia,
} from "../interfaces";

class SocialMidiaServices {
  async create(body: IBodySocialMedia, userId: number): Promise<ISocialMedia> {
    if (!userId) {
      throw new AppError(409, "User ID is required");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const socialMidia = await prisma.socialMedia.findFirst({
      where: { OR: [{ name: body.name }, { link: body.link }] },
    });

    if (socialMidia) {
      throw new AppError(404, "Social media already exists");
    }

    const data = await prisma.socialMedia.create({
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

    const data = await prisma.socialMedia.findFirst({
      where: { id },
    });

    if (!data) {
      throw new AppError(404, "Socail midia not found");
    }

    return data;
  }

  async findMany() {
    const data = await prisma.socialMedia.findMany();

    return data;
  }

  async Update(
    body: IBodyUpdateSocialMedia,
    userId: number,
    id: number
  ): Promise<ISocialMedia> {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const socialMedia = await prisma.socialMedia.findFirst({
      where: { id },
    });

    if (!socialMedia) {
      throw new AppError(404, "Social Media not foud");
    }

    const data = await prisma.socialMedia.update({
      where: { id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    const socialMedia = await prisma.socialMedia.findFirst({
      where: { id },
    });

    if (!socialMedia) {
      throw new AppError(404, "Social Media not foud");
    }

    await prisma.socialMedia.delete({ where: { id } });
  }
}

export { SocialMidiaServices };
