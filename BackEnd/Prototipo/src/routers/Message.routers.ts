import { Router } from "express";
import { container } from "tsyringe";
import { MessageServices } from "../services";
import { MessageControllers } from "../controllers";
import { ValidateBody, ckMessage, userAuth } from "../middlewares";
import { BodyMessageSchema } from "../schemas";

const MessageRouter = Router();

container.registerSingleton("MessageServices", MessageServices);
const Controllers = container.resolve(MessageControllers);

MessageRouter.post(
  "/:id",
  ValidateBody.execute(BodyMessageSchema),
  (req, res) => Controllers.create(req, res)
);

MessageRouter.get("/:id", ckMessage.checkMessageId, (req, res) =>
  Controllers.getOne(req, res)
);

MessageRouter.get("/", (req, res) => Controllers.findMany(req, res));

MessageRouter.delete(
  "/:id",
  ckMessage.checkMessageId,
  userAuth.VerifyToken,
  (req, res) => Controllers.delete(req, res)
);

export { MessageRouter };
