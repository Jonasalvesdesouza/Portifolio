import { NextFunction, Request, Response } from "express";

import { AnyZodObject } from "zod";

class ValidateBody {
  static execute(schema: AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);

      return next();
    };
  }
}

export { ValidateBody };
