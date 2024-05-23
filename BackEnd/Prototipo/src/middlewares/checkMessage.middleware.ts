import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkMessage {
  async checkMessageId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getMessageId = await prisma.message.findFirst({
        where: { id: Number(id) },
      });

      if (!getMessageId) {
        throw new AppError(404, "Message not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckMessage = new checkMessage();
