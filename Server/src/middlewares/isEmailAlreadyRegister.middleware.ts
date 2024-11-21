import { NextFunction, Request, Response } from "express";

import { prisma } from "../database/prisma";
import { AppError } from "../erros/appError";

class isEmailAlreadyRegister {
  static async execute(req: Request, res: Response, next: NextFunction) {
    if (!req.body.email || typeof req.body.email !== "string") {
      throw new AppError(400, "Invalid email provided");
    }

    const user = await prisma.user.findFirst({
      where: { email: req.body.email },
    });

    if (user) {
      throw new AppError(409, "This email is already registered");
    }

    next();
  }
}

export { isEmailAlreadyRegister };
