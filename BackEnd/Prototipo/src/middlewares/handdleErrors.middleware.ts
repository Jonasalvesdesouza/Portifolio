import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";
import { NextFunction, Request, Response } from "express";

import { AppError } from "../erros";

export class HandleErrors {
  static execute(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof ZodError) {
      return res.status(400).json({ message: error.flatten().fieldErrors });
    }

    if (error instanceof JsonWebTokenError) {
      return res.status(403).json({ message: error.message });
    }

    console.log(error);

    return res.status(500).json({ message: "Internal server error" });
  }
}
