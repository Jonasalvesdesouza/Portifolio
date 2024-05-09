import multer from "multer"

import { Router } from "express"
import { container } from "tsyringe"
import { ImageArticleServices } from "../../services"
import { ImageArticleControllers } from "../../controllers"
import { userAuth } from "../../middlewares"


export const ImageArticleRouter = Router()


container.registerSingleton("ImageArticleServices", ImageArticleServices)
const imageControllers = container.resolve(ImageArticleControllers)

ImageArticleRouter.post(

    "/image/:id",
    userAuth.VerifyToken,
    (req, res) => imageControllers.create(req, res) 

)

ImageArticleRouter.get(

    "/image/get/:id",
    (req, res) => imageControllers.getOne(req, res) 
    
)

ImageArticleRouter.patch(

    "/image/update",
    userAuth.VerifyToken,
    (req, res) => imageControllers.update(req, res) 

)

ImageArticleRouter.delete(

    "/image/delete",
    userAuth.VerifyToken,
    (req, res) => imageControllers.delete(req, res) 

)