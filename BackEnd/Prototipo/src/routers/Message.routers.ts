import { Router } from "express";
import { container } from "tsyringe";
import { MessageServices } from "../services";
import { MessageControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { MessageSchema } from "../schemas";

export const MessageRouter = Router();

container.registerSingleton("MessageServices", MessageServices);
const Controllers = container.resolve(MessageControllers);

MessageRouter.post("/:id", ValidateBody.execute(MessageSchema), (req, res) =>
  Controllers.create(req, res)
);

MessageRouter.get("/:id", (req, res) => Controllers.getOne(req, res));

MessageRouter.get("/", (req, res) => Controllers.findMany(req, res));

MessageRouter.delete("/:id", userAuth.VerifyToken, (req, res) =>
  Controllers.delete(req, res)
);
