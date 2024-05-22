import { Router } from "express";
import { container } from "tsyringe";
import { EducationServices } from "../services";
import { EducationControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { EducationSchema, EducationUpdateSchema } from "../schemas";

const EducationRouter = Router();

container.registerSingleton("EducationServices", EducationServices);
const Controllers = container.resolve(EducationControllers);

EducationRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(EducationSchema),
  (req, res) => Controllers.create(req, res)
);

EducationRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

EducationRouter.get("/", (req, res) => Controllers.findMany(req, res));

EducationRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(EducationUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

EducationRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

export { EducationRouter };
