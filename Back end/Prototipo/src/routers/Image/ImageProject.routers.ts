import { Router } from "express"
import { container } from "tsyringe"
import { ImageProjectServices } from "../../services"
import { ImageProjectControllers } from "../../controllers"
import { userAuth } from "../../middlewares"


export const ImageProjectRouter = Router()

container.registerSingleton("ImageProjectServices", ImageProjectServices)
const imageControllers = container.resolve(ImageProjectControllers)

ImageProjectRouter.post(

    "/image",
    userAuth.VerifyToken,
    (req, res) => imageControllers.create(req, res) 

)

ImageProjectRouter.get(

    "/image/get/:id",
    (req, res) => imageControllers.getOne(req, res) 
    
)

ImageProjectRouter.patch(

    "/image/update",
    userAuth.VerifyToken,
    (req, res) => imageControllers.update(req, res) 

)

ImageProjectRouter.delete(

    "/image/delete",
    userAuth.VerifyToken,
    (req, res) => imageControllers.delete(req, res) 

)