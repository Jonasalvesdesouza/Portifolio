import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkSocialMedia {
  async checkSocialMediaName(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, link } = req.body;

      const getSocialMediaName = await prisma.socialMedia.findFirst({
        where: { OR: [{ name }, { link }] },
      });

      if (getSocialMediaName) {
        throw new AppError(404, "SocialMedia already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkSocialMediaId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getSocialMediaId = await prisma.socialMedia.findFirst({
        where: { id: Number(id) },
      });

      if (!getSocialMediaId) {
        throw new AppError(404, "SocialMedia not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckSocialMedia = new checkSocialMedia();
