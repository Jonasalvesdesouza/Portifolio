import { Router } from "express";
import { container } from "tsyringe";
import { SkillServices } from "../services";
import { SkillControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  ckSkill,
  userAuth,
} from "../middlewares";
import { BodySkillSchema, SkillUpdateSchema } from "../schemas";

const SkillRouter = Router();

container.registerSingleton("SkillServices", SkillServices);
const Controllers = container.resolve(SkillControllers);

SkillRouter.post(
  "/",
  userAuth.VerifyToken,
  ckSkill.checkSkillName,
  checkProfileUser.execute,
  ValidateBody.execute(BodySkillSchema),
  (req, res) => Controllers.create(req, res)
);
SkillRouter.get("/:id", ckSkill.checkSkillId, (req, res) =>
  Controllers.getOne(req, res)
);

SkillRouter.get("/", (req, res) => Controllers.findMany(req, res));

SkillRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckSkill.checkSkillId,
  checkProfileUser.execute,
  ValidateBody.execute(SkillUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

SkillRouter.delete(
  "/:id",
  ckSkill.checkSkillId,
  userAuth.VerifyToken,
  (req, res) => Controllers.delete(req, res)
);

export { SkillRouter };
