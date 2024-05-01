import { Router } from "express"
import { container } from "tsyringe"
import { ImageServices } from "../services"
import { ImageControllers } from "../controllers"
import { ValidateBody, userAuth } from "../middlewares"
import { ImageSchema, ImageUpdateSchema } from "../schemas"

export const ImageRouter = Router()

container.registerSingleton("ContactServices", ImageServices)
const contactControllers = container.resolve(ImageControllers)

ImageRouter.post(

    "/",
    userAuth.VerifyToken,
    (req, res) => contactControllers.create(req, res) 

)

ImageRouter.patch(

    "/update",
    userAuth.VerifyToken,
    (req, res) => contactControllers.update(req, res) 

)