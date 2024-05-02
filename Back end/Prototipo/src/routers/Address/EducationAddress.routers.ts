import { Router } from "express"
import { container } from "tsyringe"
import { EducationAddressServices } from "../../services"
import { EducationAddressControllers } from "../../controllers"
import { ValidateBody, userAuth } from "../../middlewares"

import { 

    AddressEducationSchema, 
    AddressEducationUpdateSchema 

} from "../../schemas"

export const EducationAddressRouter = Router()

container.registerSingleton("EducationAddressServices", EducationAddressServices)
const Controllers = container.resolve(EducationAddressControllers)

EducationAddressRouter.post(

    "/address/",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressEducationSchema),
    (req, res) => Controllers.create(req, res) 

)

EducationAddressRouter.get(

    "/address/get/:id",
    (req, res) => Controllers.getOne(req, res) 
)

EducationAddressRouter.patch(

    "/address/update/:id",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressEducationUpdateSchema),
    (req, res) => Controllers.update(req, res) 

)

EducationAddressRouter.delete(

    "/address/delete/:id",
    userAuth.VerifyToken,
    (req, res) => Controllers.delete(req, res) 

)