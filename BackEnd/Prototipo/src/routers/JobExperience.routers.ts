import { Router } from "express";
import { container } from "tsyringe";
import { JobExperienceServices } from "../services";
import { JobExperienceControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  ckJobExperience,
  userAuth,
} from "../middlewares";
import { BodyJobExperienceSchema, JobExperienceUpdateSchema } from "../schemas";

const JobExperienceRouter = Router();

container.registerSingleton("JobExperienceServices", JobExperienceServices);
const Controllers = container.resolve(JobExperienceControllers);

JobExperienceRouter.post(
  "/",
  userAuth.VerifyToken,
  ckJobExperience.checkJobExperienceTitle,
  checkProfileUser.execute,
  ValidateBody.execute(BodyJobExperienceSchema),
  (req, res) => Controllers.create(req, res)
);

JobExperienceRouter.get(
  "/:id",
  ckJobExperience.checkJobExperienceId,
  (req, res) => Controllers.getOne(req, res)
);

JobExperienceRouter.get("/", (req, res) => Controllers.findMany(req, res));

JobExperienceRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ckJobExperience.checkJobExperienceId,
  checkProfileUser.execute,
  ValidateBody.execute(JobExperienceUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

JobExperienceRouter.delete(
  "/:id",
  userAuth.VerifyToken,
  ckJobExperience.checkJobExperienceId,
  (req, res) => Controllers.delete(req, res)
);

export { JobExperienceRouter };
