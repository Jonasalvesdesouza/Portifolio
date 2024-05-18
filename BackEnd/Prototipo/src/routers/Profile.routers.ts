import { Router } from "express";
import { container } from "tsyringe";
import { ProfileServices } from "../services";
import { ProfileControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { ProfileSchema, ProfileUpdateSchema } from "../schemas";
import { ContactRouter } from "./Contact.routers";
import { ImageProfileRouter } from "./Image";

export const ProfileRouter = Router();

container.registerSingleton("ProfileServices", ProfileServices);
const profileControllers = container.resolve(ProfileControllers);

ProfileRouter.post(
  "/",
  ValidateBody.execute(ProfileSchema),
  userAuth.VerifyToken,
  (req, res) => profileControllers.create(req, res)
);

ProfileRouter.get("/", (req, res) => profileControllers.findFirst(req, res));

ProfileRouter.patch(
  "/update",
  userAuth.VerifyToken,
  ValidateBody.execute(ProfileUpdateSchema),
  (req, res) => profileControllers.update(req, res)
);

ProfileRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  profileControllers.delete(req, res)
);

ProfileRouter.use("/", ContactRouter);
ProfileRouter.use("/", ImageProfileRouter);
