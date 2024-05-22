import { Router } from "express";
import { container } from "tsyringe";
import { ContactServices } from "../services";
import { ContactControllers } from "../controllers";
import { ValidateBody, userAuth } from "../middlewares";
import { contactSchema, ContactUpdateSchema } from "../schemas";

const ContactRouter = Router();

container.registerSingleton("ContactServices", ContactServices);
const contactControllers = container.resolve(ContactControllers);

ContactRouter.post(
  "/contact/",
  userAuth.VerifyToken,
  ValidateBody.execute(contactSchema),
  (req, res) => contactControllers.create(req, res)
);

ContactRouter.get("/contact/", (req, res) =>
  contactControllers.findFirst(req, res)
);

ContactRouter.patch(
  "/contact/",
  userAuth.VerifyToken,
  ValidateBody.execute(ContactUpdateSchema),
  (req, res) => contactControllers.update(req, res)
);

export { ContactRouter };
