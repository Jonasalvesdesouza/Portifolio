import { prisma } from "../database/prisma";
import { AppError } from "../erros";
import {
  ContactReturnSchema,
  typeContact,
  typeExpectationContact,
  typeUpdateContact,
  typeUpdateContactExpct,
} from "../schemas";

export class ContactServices {
  async create(
    body: typeContact,
    userId: number
  ): Promise<typeExpectationContact> {
    if (!userId) {
      throw new AppError(409, "User is required");
    }

    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const contact = await prisma.contact.findFirst({
      where: { profileId: profile.id },
    });

    if (contact) {
      throw new AppError(404, "Not foud");
    }

    const data = await prisma.contact.create({
      data: {
        ...body,
        profileId: profile.id,
      },
    });

    return ContactReturnSchema.parse(data);
  }

  async findFirst() {
    const data = await prisma.contact.findFirst();

    return data;
  }

  async Update(
    body: typeUpdateContact,
    userId: number
  ): Promise<typeUpdateContactExpct> {
    const profile = await prisma.profile.findFirst({
      where: { userId },
    });

    if (!profile) {
      throw new AppError(404, "Profile does not match user");
    }

    const contact = await prisma.contact.findFirst({
      where: { profileId: profile.id },
    });

    if (!contact) {
      throw new AppError(404, "Contact not foud");
    }

    const data = await prisma.contact.update({
      where: { id: contact.id },
      data: body,
    });

    return ContactReturnSchema.parse(data);
  }
}
