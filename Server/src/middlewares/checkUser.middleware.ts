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
      const userId = Number(res.locals.decode.id);
      if (isNaN(userId)) {
        throw new AppError(400, "Invalid user ID");
      }

      const user = await prisma.user.findFirst({
        where: { id: userId },
      });

      if (!user) {
        throw new AppError(404, "User not found");
      }

      res.locals.user = user;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckUser = new checkUser();
