import { Router } from "express";
import { container } from "tsyringe";
import { SocialMidiaServices } from "../services";
import { SocialMediaControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  ckSocialMedia,
  userAuth,
} from "../middlewares";
import { BodySocialMediaSchema, SocialMediaUpdateSchema } from "../schemas";

const SocialMidiaRouter = Router();

container.registerSingleton("SocialMidiaServices", SocialMidiaServices);
const Controllers = container.resolve(SocialMediaControllers);

SocialMidiaRouter.post(
  "/",
  userAuth.VerifyToken,
  ckSocialMedia.checkSocialMediaName,
  checkProfileUser.execute,
  ValidateBody.execute(BodySocialMediaSchema),
  (req, res) => Controllers.create(req, res)
);

SocialMidiaRouter.get("/:id", ckSocialMedia.checkSocialMediaId, (req, res) =>
  Controllers.getOne(req, res)
);

SocialMidiaRouter.get("/", (req, res) => Controllers.findMany(req, res));

SocialMidiaRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckSocialMedia.checkSocialMediaId,
  checkProfileUser.execute,
  ValidateBody.execute(SocialMediaUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

SocialMidiaRouter.delete(
  "/:id",
  userAuth.VerifyToken,
  ckSocialMedia.checkSocialMediaId,
  (req, res) => Controllers.delete(req, res)
);

export { SocialMidiaRouter };
