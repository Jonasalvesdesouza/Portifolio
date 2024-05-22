import { Router } from "express";
import { container } from "tsyringe";
import { ArticleServices } from "../services";
import { ArticlesControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { ArticleBodySchema, ArticlesBodyUpdateSchema } from "../schemas";
import { ImageArticleRouter } from "./Image";

const ArticlesRouter = Router();

container.registerSingleton("ArticleServices", ArticleServices);
const Controllers = container.resolve(ArticlesControllers);

ArticlesRouter.post(
  "/",
  userAuth.VerifyToken,
  ValidateBody.execute(ArticleBodySchema),
  (req, res) => Controllers.create(req, res)
);

ArticlesRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

ArticlesRouter.get("/", (req, res) => Controllers.findMany(req, res));

ArticlesRouter.patch(
  "/:id",
  userAuth.VerifyToken,
  ValidateBody.execute(ArticlesBodyUpdateSchema),
  (req, res) => Controllers.update(req, res)
);

ArticlesRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);

ArticlesRouter.use("/", ImageArticleRouter);

export { ArticlesRouter };
