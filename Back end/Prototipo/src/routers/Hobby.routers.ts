import { Router } from "express"
import { container } from "tsyringe"
import { HobbyServices } from "../services"
import { HobbyControllers } from "../controllers"
import { ValidateBody, userAuth } from "../middlewares"
import {
     
    HobbySchema, 
    HobbyUpdate 

} from "../schemas"

export const HobbyRouter = Router()

container.registerSingleton("HobbyServices", HobbyServices)
const Controllers = container.resolve(HobbyControllers)

HobbyRouter.post(

    "/",
    userAuth.VerifyToken,
    ValidateBody.execute(HobbySchema),
    (req, res) => Controllers.create(req, res) 

)
HobbyRouter.get(

    "/get/:id",
    (req, res) => Controllers.getOne(req, res) 

)

HobbyRouter.get(

    "/get",
    (req, res) => Controllers.findMany(req, res) 
)

HobbyRouter.patch(

    "/update/:id",
    userAuth.VerifyToken,
    ValidateBody.execute(HobbyUpdate),
    (req, res) => Controllers.update(req, res) 

)

HobbyRouter.delete(

    "/:id",
    userAuth.VerifyToken,
    (req, res) => Controllers.delete(req, res) 

)

