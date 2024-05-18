import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";

import {
  typeCreateProfile,
  typeProfileFull,
  typeUpdateProfile,
} from "../schemas";
import { AppError } from "../erros";

@injectable()
export class ProfileServices {
  async create(body: typeCreateProfile, userId: number) {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(404, "Not foud");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (profile) {
      throw new AppError(404, "Not foud");
    }
    const data = await prisma.profile.create({
      data: {
        ...body,
        userId,
        userName: user.name,
      },
    });

    return data;
  }

  async findFirst(): Promise<typeProfileFull | null> {
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

    if (!data) {
      throw new AppError(404, "Not Data");
    }
    const { contact, ...rest } = data;

    if (!contact) {
      return { ...rest, contact: null };
    }

    const validatedContact = {
      ...contact,
      profileId: contact.profileId ?? null,
    };

    return {
      ...rest,
      contact: validatedContact,
    };
  }

  async update(
    id: number,
    body: typeUpdateProfile
  ): Promise<typeUpdateProfile> {
    const profile = await prisma.profile.findFirst({
      where: { userId: id },
    });

    if (!profile) {
      throw new AppError(404, "Profile not foud");
    }

    const data = await prisma.profile.update({
      where: { id: profile.id },
      data: body,
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    const profile = await prisma.profile.findFirst({
      where: { id },
    });

    if (!profile) {
      throw new AppError(404, "Profile not foud");
    }

    await prisma.profile.delete({ where: { id } });
  }
}
