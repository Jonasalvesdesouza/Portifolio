import { Router } from "express"
import { container } from "tsyringe"
import { ProfileAddressServices } from "../../services"
import { ProfileAddressControllers } from "../../controllers"
import { ValidateBody, userAuth } from "../../middlewares"
import { AddressProfileSchema, AddressProfileUpdateSchema } from "../../schemas"

export const ProfileAddressRouter = Router()

container.registerSingleton("ProfileAddressServices", ProfileAddressServices)
const profileControllers = container.resolve(ProfileAddressControllers)

ProfileAddressRouter.post(

    "/address/",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressProfileSchema),
    (req, res) => profileControllers.create(req, res) 

)

ProfileAddressRouter.get(

    "/address/get",
    (req, res) => profileControllers.findFirst(req, res) 
)

ProfileAddressRouter.patch(

    "/address/update",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressProfileUpdateSchema),
    (req, res) => profileControllers.update(req, res) 

)