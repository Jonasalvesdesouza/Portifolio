import { Router } from "express";
import { container } from "tsyringe";
import { ProjectsServices } from "../services";
import { ProjectsControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { BodyProjectsSchema, ProjectsUpdateSchema } from "../schemas";
import { ImageProjectRouter } from "./Image";

const ProjectsRouter = Router();

container.registerSingleton("ProjectsServices", ProjectsServices);
const Controllers = container.resolve(ProjectsControllers);

ProjectsRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(BodyProjectsSchema),
  (req, res) => Controllers.create(req, res)
);

ProjectsRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

ProjectsRouter.get("/", (req, res) => Controllers.findMany(req, res));

ProjectsRouter.patch(
  "/update/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(ProjectsUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

ProjectsRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

ProjectsRouter.use("/", ImageProjectRouter);

export { ProjectsRouter };
