import { Router } from "express";
import { container } from "tsyringe";

import { UserControllers } from "../controllers";
import { ValidateBody, isEmailAlreadyRegister, userAuth } from "../middlewares";
import { UserServices } from "../services/User.services";
import { LoginUserSchema, UserSchema } from "../schemas";

const UserRouter = Router();

container.registerSingleton("UserServices", UserServices);
const userControllers = container.resolve(UserControllers);

UserRouter.post(
  "/",
  ValidateBody.execute(UserSchema),
  isEmailAlreadyRegister.execute,
  (req, res) => userControllers.userRegister(req, res)
);

UserRouter.post("/login", ValidateBody.execute(LoginUserSchema), (req, res) =>
  userControllers.login(req, res)
);

UserRouter.patch("/", userAuth.VerifyToken, (req, res) =>
  userControllers.update(req, res)
);

UserRouter.get("/:id", userAuth.VerifyToken, (req, res) =>
  userControllers.getUser(req, res)
);

export { UserRouter };
