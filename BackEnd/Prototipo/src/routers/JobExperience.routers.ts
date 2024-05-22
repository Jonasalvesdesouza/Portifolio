import { Router } from "express";
import { container } from "tsyringe";
import { JobExperienceServices } from "../services";
import { JobExperienceControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { JobExperienceSchema, JobExperienceUpdateSchema } from "../schemas";

const JobExperienceRouter = Router();

container.registerSingleton("JobExperienceServices", JobExperienceServices);
const Controllers = container.resolve(JobExperienceControllers);

JobExperienceRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(JobExperienceSchema),
  (req, res) => Controllers.create(req, res)
);

JobExperienceRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

JobExperienceRouter.get("/", (req, res) => Controllers.findMany(req, res));

JobExperienceRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(JobExperienceUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

JobExperienceRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

export { JobExperienceRouter };
