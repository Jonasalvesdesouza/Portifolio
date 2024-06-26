import { prisma } from "../../database/prisma";
import { AppError } from "../../erros";

import { IImage, IBodyUpdateImage } from "../../interfaces";

class ImageArticleServices {
  async create(
    userId: number,
    articleId: number,
    path: string
  ): Promise<IImage> {
    if (!userId) {
      throw new AppError(409, "User ID is required");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const data = await prisma.imageArticle.create({
      data: {
        path,
        articleId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.imageArticle.findFirst({
      where: { id },
    });

    return data;
  }

  async Update(
    path: string,
    userId: number,
    imageId: number
  ): Promise<IBodyUpdateImage> {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const object = { path };

    const data = await prisma.imageArticle.update({
      where: { id: imageId },
      data: object,
    });

    return data;
  }

  async delete(userId: number) {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const image = await prisma.imageArticle.findFirst();

    if (!image) {
      throw new AppError(404, "Image not Foud");
    }

    return await prisma.imageArticle.delete({
      where: { id: image.id },
    });
  }
}

export { ImageArticleServices };
