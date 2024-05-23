import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkHobby {
  async checkHobbyName(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const getHobbyName = await prisma.hobby.findFirst({
        where: { name },
      });

      if (getHobbyName) {
        throw new AppError(404, "Hobby already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkHobbyId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getHobbyId = await prisma.hobby.findFirst({
        where: { id: Number(id) },
      });

      if (!getHobbyId) {
        throw new AppError(404, "Hobby not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckHobby = new checkHobby();
