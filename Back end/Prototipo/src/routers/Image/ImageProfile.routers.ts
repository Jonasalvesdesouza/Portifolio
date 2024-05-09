import { Router } from "express"
import { container } from "tsyringe"
import { ImageProfileServices } from "../../services"
import { ImageProfileControllers } from "../../controllers"
import { userAuth } from "../../middlewares"


export const ImageProfileRouter = Router()
container.registerSingleton("ImageProfileServices", ImageProfileServices)
const imageControllers = container.resolve(ImageProfileControllers)

ImageProfileRouter.post(

    "/image",
    userAuth.VerifyToken,
    (req, res) => imageControllers.create(req, res) 

)

ImageProfileRouter.get(

    "/image/get",
    (req, res) => imageControllers.findFirst(req, res) 
    
)

ImageProfileRouter.patch(

    "/image/update",
    userAuth.VerifyToken,
    (req, res) => imageControllers.update(req, res) 

)

ImageProfileRouter.delete(

    "/image/delete",
    userAuth.VerifyToken,
    (req, res) => imageControllers.delete(req, res) 

)