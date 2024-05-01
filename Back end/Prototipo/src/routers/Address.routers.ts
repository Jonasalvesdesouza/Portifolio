import { Router } from "express"
import { container } from "tsyringe"
import { AddressServices } from "../services"
import { AddressControllers } from "../controllers"
import { ValidateBody, userAuth } from "../middlewares"
import { AddressSchema, AddressUpdateSchema } from "../schemas"

export const AddressRouter = Router()

container.registerSingleton("ContactServices", AddressServices)
const contactControllers = container.resolve(AddressControllers)

AddressRouter.post(

    "/",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressSchema),
    (req, res) => contactControllers.create(req, res) 

)

AddressRouter.patch(

    "/update",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressUpdateSchema),
    (req, res) => contactControllers.update(req, res) 

)