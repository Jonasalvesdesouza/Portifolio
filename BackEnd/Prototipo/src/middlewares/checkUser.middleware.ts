import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { compare, hash } from "bcrypt";
import { AppError } from "../erros";

class checkUser {
  async checkUserExist(req: Request, res: Response, next: NextFunction) {
    try {
      const getUserExist = await prisma.user.findFirst();

      if (getUserExist) {
        throw new AppError(404, "User already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = res.locals.decode.id;

      const getUserId = await prisma.user.findFirst({
        where: { id: Number(id) },
      });

      if (!getUserId) {
        throw new AppError(404, "User not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckUser = new checkUser();
