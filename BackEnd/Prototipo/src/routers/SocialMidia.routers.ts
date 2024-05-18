import { Router } from "express";
import { container } from "tsyringe";
import { SocialMidiaServices } from "../services";
import { SocialMediaControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { SocialMediaSchema, SocialMediaUpdateSchema } from "../schemas";

export const SocialMidiaRouter = Router();

container.registerSingleton("SocialMidiaServices", SocialMidiaServices);
const Controllers = container.resolve(SocialMediaControllers);

SocialMidiaRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(SocialMediaSchema),
  (req, res) => Controllers.create(req, res)
);

SocialMidiaRouter.get("/get/:id", (req, res) => Controllers.getOne(req, res));

SocialMidiaRouter.get("/get", (req, res) => Controllers.findMany(req, res));

SocialMidiaRouter.patch(
  "/update/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(SocialMediaUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

SocialMidiaRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);
