import { verify, JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import { AppError } from "../erros/appError";
import { jwtConfig } from "../configs";

class userAuthentication {
  VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new AppError(401, "Token is required");
    }

    const token = authorization.replace("Bearer ", "");

    try {
      const { secret } = jwtConfig();
      const decoded = verify(token, secret);
      res.locals.decode = decoded;
      next();
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new AppError(401, "Token is invalid");
      }
      if (error instanceof TokenExpiredError) {
        throw new AppError(401, "Token expired");
      } else {
        throw new AppError(500, "Token verification error");
      }
    }
  };
}

export const userAuth = new userAuthentication();
