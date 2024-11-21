import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkProjects {
  async checkProjectsTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;

      const getProjectsTitle = await prisma.project.findFirst({
        where: { title },
      });

      if (getProjectsTitle) {
        throw new AppError(404, "Projects already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkProjectsId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getProjectsId = await prisma.project.findFirst({
        where: { id: Number(id) },
      });

      if (!getProjectsId) {
        throw new AppError(404, "Projects not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckProjects = new checkProjects();
