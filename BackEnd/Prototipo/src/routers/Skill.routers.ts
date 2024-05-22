import { Router } from "express";
import { container } from "tsyringe";
import { SkillServices } from "../services";
import { SkillControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { SkillSchema, SkillUpdateSchema } from "../schemas";

const SkillRouter = Router();

container.registerSingleton("SkillServices", SkillServices);
const Controllers = container.resolve(SkillControllers);

SkillRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(SkillSchema),
  (req, res) => Controllers.create(req, res)
);
SkillRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

SkillRouter.get("/", (req, res) => Controllers.findMany(req, res));

SkillRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(SkillUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

SkillRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

export { SkillRouter };
