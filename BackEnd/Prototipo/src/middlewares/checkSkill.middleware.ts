import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkSkill {
  async checkSkillName(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const getSkillName = await prisma.skill.findFirst({
        where: { name },
      });

      if (getSkillName) {
        throw new AppError(404, "Skill already exists");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  async checkSkillId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const getSkillId = await prisma.skill.findFirst({
        where: { id: Number(id) },
      });

      if (!getSkillId) {
        throw new AppError(404, "Skill not foud");
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

export const ckSkill = new checkSkill();
