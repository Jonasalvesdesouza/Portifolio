import { Router } from "express";
import { container } from "tsyringe";
import { ProfileServices } from "../services";
import { ProfileControllers } from "../controllers";
import {
  ValidateBody,
  userAuth,
  ckProfile,
  checkProfileUser,
} from "../middlewares";
import { BodyProfileSchema, ProfileUpdateSchema } from "../schemas";
import { ContactRouter } from "./Contact.routers";
import { ImageProfileRouter } from "./Image";

const ProfileRouter = Router();

container.registerSingleton("ProfileServices", ProfileServices);
const profileControllers = container.resolve(ProfileControllers);

ProfileRouter.post(
  "/",
  userAuth.VerifyToken,
  ckProfile.checkProfileExist,
  ValidateBody.execute(BodyProfileSchema),
  (req, res) => profileControllers.create(req, res)
);

ProfileRouter.get("/", (req, res) => profileControllers.findFirst(req, res));

ProfileRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckProfile.checkProfileId,
  ValidateBody.execute(ProfileUpdateSchema),
  (req, res) => profileControllers.update(req, res)
);

ProfileRouter.delete(
  "/:id",
  userAuth.VerifyToken,
  ckProfile.checkProfileId,
  (req, res) => profileControllers.delete(req, res)
);

ProfileRouter.use("/", ContactRouter);
ProfileRouter.use("/", ImageProfileRouter);

export { ProfileRouter };
