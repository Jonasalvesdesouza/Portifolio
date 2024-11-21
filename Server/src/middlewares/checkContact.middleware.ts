import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkContact {
  async checkContactId(req: Request, res: Response, next: NextFunction) {
    try {
      const contactId = Number(req.params.id);
      const getContactId = await prisma.contact.findFirst({
        where: { id: contactId },
      });

      if (!getContactId) {
        throw new AppError(404, "Contact not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckContact = new checkContact();
