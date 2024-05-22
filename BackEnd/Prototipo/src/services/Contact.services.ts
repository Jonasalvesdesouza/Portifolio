import { prisma } from "../database/prisma";
import { AppError } from "../erros";
import { IContact, IBodyContact, IUpdateBodyContact } from "../interfaces";

class ContactServices {
  async create(body: IBodyContact, userId: number): Promise<IContact> {
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

    return data;
  }

  async findFirst() {
    const data = await prisma.contact.findFirst();

    return data;
  }

  async Update(body: IUpdateBodyContact, userId: number): Promise<IContact> {
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
      data: body as any,
    });

    return data;
  }
}

export { ContactServices };
