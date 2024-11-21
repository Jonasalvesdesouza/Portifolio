import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkProfileUser {
  static async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(res.locals.decode.id);
      if (isNaN(userId)) {
        throw new AppError(400, "Invalid user ID");
      }
      const user = await prisma.user.findFirst({
        where: { id: userId },
      });
      if (!user) {
        throw new AppError(404, "User not foud");
      }

      const profile = await prisma.profile.findFirst({
        where: { userId },
      });

      if (!profile) {
        throw new AppError(404, "Profile does not match user");
      }

      res.locals.profileId = profile.id;
      return next();
    } catch (error) {
      next(error);
    }
  }
}

export { checkProfileUser };
