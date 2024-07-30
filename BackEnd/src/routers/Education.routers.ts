import { Router } from "express";
import { container } from "tsyringe";
import { EducationServices } from "../services";
import { EducationControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  userAuth,
  ckEducation,
} from "../middlewares";
import { BodyEducationSchema, EducationUpdateSchema } from "../schemas";

const EducationRouter = Router();

container.registerSingleton("EducationServices", EducationServices);
const Controllers = container.resolve(EducationControllers);

EducationRouter.post(
  "/",
  userAuth.VerifyToken,
  ckEducation.checkEducationTitle,
  checkProfileUser.execute,
  ValidateBody.execute(BodyEducationSchema),
  (req, res) => Controllers.create(req, res)
);

EducationRouter.get("/:id", ckEducation.checkEducationId, (req, res) =>
  Controllers.getOne(req, res)
);

EducationRouter.get("/", (req, res) => Controllers.findMany(req, res));

EducationRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckEducation.checkEducationId,
  checkProfileUser.execute,
  ValidateBody.execute(EducationUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

EducationRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

export { EducationRouter };
