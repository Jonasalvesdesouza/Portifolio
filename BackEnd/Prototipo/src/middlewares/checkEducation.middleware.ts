import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkEducation {
  async checkEducationTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;

      const getEducationTitle = await prisma.education.findFirst({
        where: { title },
      });

      if (getEducationTitle) {
        throw new AppError(404, "Education already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkEducationId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getEducationId = await prisma.education.findFirst({
        where: { id: Number(id) },
      });

      if (!getEducationId) {
        throw new AppError(404, "Education not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckEducation = new checkEducation();
