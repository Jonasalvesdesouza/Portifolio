import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkJobExperience {
  async checkJobExperienceTitle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title } = req.body;

      const getJobExperienceTitle = await prisma.jobExperience.findFirst({
        where: { title },
      });

      if (getJobExperienceTitle) {
        throw new AppError(404, "JobExperience already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkJobExperienceId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getJobExperienceId = await prisma.jobExperience.findFirst({
        where: { id: Number(id) },
      });

      if (!getJobExperienceId) {
        throw new AppError(404, "JobExperience not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckJobExperience = new checkJobExperience();
