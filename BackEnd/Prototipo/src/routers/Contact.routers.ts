import { Router } from "express";
import { container } from "tsyringe";
import { ContactServices } from "../services";
import { ContactControllers } from "../controllers";
import {
  ValidateBody,
  checkProfileUser,
  ckContact,
  userAuth,
} from "../middlewares";
import { ContactBodySchema, ContactUpdateSchema } from "../schemas";

const ContactRouter = Router();

container.registerSingleton("ContactServices", ContactServices);
const contactControllers = container.resolve(ContactControllers);

ContactRouter.post(
  "/contact/",
  userAuth.VerifyToken,
  checkProfileUser.execute,
  ValidateBody.execute(ContactBodySchema),
  (req, res) => contactControllers.create(req, res)
);

ContactRouter.get("/contact/:id", ckContact.checkContactId, (req, res) =>
  contactControllers.findFirst(req, res)
);

ContactRouter.patch(
  "/contact/:id",
  userAuth.VerifyToken,
  ckContact.checkContactId,
  checkProfileUser.execute,
  ValidateBody.execute(ContactUpdateSchema),
  (req, res) => contactControllers.update(req, res)
);

export { ContactRouter };
