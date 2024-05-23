import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkArticle {
  async checkArticleTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;

      const getArticleTitle = await prisma.article.findFirst({
        where: { title },
      });

      if (getArticleTitle) {
        throw new AppError(404, "Article already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkArticleId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getArticleId = await prisma.article.findFirst({
        where: { id: Number(id) },
      });

      if (!getArticleId) {
        throw new AppError(404, "Article not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckArticle = new checkArticle();
