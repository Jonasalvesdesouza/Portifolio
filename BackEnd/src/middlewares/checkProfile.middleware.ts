import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkProfile {
  async checkProfileExist(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(res.locals.decode.id);

      const user = await prisma.user.findFirst({ where: { id: userId } });

      if (!user) {
        throw new AppError(404, "User not foud");
      }

      const profile = await prisma.profile.findFirst({
        where: { userId },
      });

      if (profile) {
        throw new AppError(404, "Profile already exists");
      }

      res.locals.userName = user.name;
      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkProfileId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getProfileId = await prisma.profile.findFirst({
        where: { id: Number(id) },
      });

      if (!getProfileId) {
        throw new AppError(404, "Profile not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckProfile = new checkProfile();
