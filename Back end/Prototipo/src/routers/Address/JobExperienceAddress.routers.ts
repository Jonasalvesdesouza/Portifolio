import { Router } from "express"
import { container } from "tsyringe"
import { JobExperienceAddressServices } from "../../services"
import { JobExperienceAddressControllers } from "../../controllers"
import { ValidateBody, userAuth } from "../../middlewares"

import { 

    AddressJobExperienceSchema, 
    AddressJobExperienceUpdateSchema 

} from "../../schemas"

export const JobExperienceAddressRouter = Router()

container.registerSingleton("JobExperienceAddressServices", JobExperienceAddressServices)
const Controllers = container.resolve(JobExperienceAddressControllers)

JobExperienceAddressRouter.post(

    "/address/",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressJobExperienceSchema),
    (req, res) => Controllers.create(req, res) 

)

JobExperienceAddressRouter.get(

    "/address/get/:id",
    (req, res) => Controllers.getOne(req, res) 
)

JobExperienceAddressRouter.patch(

    "/address/update/:id",
    userAuth.VerifyToken,
    ValidateBody.execute(AddressJobExperienceUpdateSchema),
    (req, res) => Controllers.update(req, res) 

)

JobExperienceAddressRouter.delete(

    "/address/delete/:id",
    userAuth.VerifyToken,
    (req, res) => Controllers.delete(req, res) 

)