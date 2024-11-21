import { Router } from "express";
import { container } from "tsyringe";
import { HobbyServices } from "../services";
import { HobbyControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  ckHobby,
  userAuth,
} from "../middlewares";
import { BodyHobbySchema, HobbyUpdate } from "../schemas";

const HobbyRouter = Router();

container.registerSingleton("HobbyServices", HobbyServices);
const Controllers = container.resolve(HobbyControllers);

HobbyRouter.post(
  "/",
  userAuth.VerifyToken,
  ckHobby.checkHobbyName,
  checkProfileUser.execute,
  ValidateBody.execute(BodyHobbySchema),
  (req, res) => Controllers.create(req, res)
);
HobbyRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

HobbyRouter.get("/", (req, res) => Controllers.findMany(req, res));

HobbyRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckHobby.checkHobbyId,
  checkProfileUser.execute,
  ValidateBody.execute(HobbyUpdate),
  (req, res) => Controllers.update(req, res)
);

HobbyRouter.delete(
  "/:id",
  userAuth.VerifyToken,
  ckHobby.checkHobbyId,
  (req, res) => Controllers.delete(req, res)
);

export { HobbyRouter };
