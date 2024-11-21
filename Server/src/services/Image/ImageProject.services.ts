import { prisma } from "../../database/prisma";
import { AppError } from "../../erros";

import { IImage, IBodyUpdateImage } from "../../interfaces";

class ImageProjectServices {
  async create(
    userId: number,
    projectIdId: number,
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

    if (!projectIdId) {
      throw new AppError(404, "Id not foud");
    }

    const data = await prisma.imageProject.create({
      data: {
        path: path,
        projectId: projectIdId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    const data = await prisma.imageProject.findFirst({
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

    const data = await prisma.imageProject.update({
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

    const image = await prisma.imageProject.findFirst();

    if (!image) {
      throw new AppError(404, "Image not Foud");
    }

    return await prisma.imageProject.delete({
      where: { id: image.id },
    });
  }
}

export { ImageProjectServices };
