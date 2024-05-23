import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import { IArticles, IBodyArticles, IbodyUpdate } from "../interfaces";
import { ReturnBodyArticleSchema } from "../schemas";

class ArticleServices {
  async create(body: IBodyArticles, profileId: number): Promise<IArticles> {
    const data = await prisma.article.create({
      data: {
        ...body,
        profileId: profileId,
        image: {},
      },
    });

    return ReturnBodyArticleSchema.parse(data);
  }

  async getOne(id: number) {
    const data = await prisma.article.findFirst({
      where: { id },
      include: {
        image: true,
      },
    });
    return data;
  }

  async findMany() {
    const data = await prisma.article.findMany({
      include: {
        image: true,
      },
    });

    return data;
  }

  async Update(body: IbodyUpdate, id: number): Promise<IArticles> {
    const data = await prisma.article.update({
      where: { id },
      data: body,
      include: {
        image: true,
      },
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.article.delete({ where: { id } });
  }
}

export { ArticleServices };
