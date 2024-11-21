import { prisma } from "../database/prisma";
import { AppError } from "../erros";
import { IContact, IBodyContact, IUpdateBodyContact } from "../interfaces";

class ContactServices {
  async create(body: IBodyContact, profileId: number): Promise<IContact> {
    const data = await prisma.contact.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async findFirst(id: number) {
    const data = await prisma.contact.findFirst({ where: { id } });

    return data;
  }

  async Update(body: IUpdateBodyContact, id: number): Promise<IContact> {
    const data = await prisma.contact.update({
      where: { id },
      data: body as any,
    });

    return data;
  }
}

export { ContactServices };
