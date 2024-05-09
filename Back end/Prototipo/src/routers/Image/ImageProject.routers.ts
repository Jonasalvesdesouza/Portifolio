import express, { Router } from "express"
import { container } from "tsyringe"
import { ImageProjectServices } from "../../services"
import { ImageProjectControllers } from "../../controllers"
import { userAuth } from "../../middlewares"
import multer from 'multer'
import uploadsConfig from "../../configs/multer.config"
import path from 'path';

const uploadDirectory = path.join(__dirname, '../../../');

export const ImageProjectRouter = Router()
const upload = multer(uploadsConfig);

container.registerSingleton("ImageProjectServices", ImageProjectServices)
const imageControllers = container.resolve(ImageProjectControllers)

ImageProjectRouter.use('/uploads', express.static(uploadDirectory));

ImageProjectRouter.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(uploadDirectory, imageName));
});


ImageProjectRouter.post(

    "/image/:id",
    userAuth.VerifyToken,
    upload.single("path"),
    (req, res) => imageControllers.create(req, res) 

)

ImageProjectRouter.get(

    "/image/get/:id",
    (req, res) => imageControllers.getOne(req, res) 
    
)

ImageProjectRouter.patch(

    "/image/update/:id",
    userAuth.VerifyToken,
    upload.single("path"),
    (req, res) => imageControllers.update(req, res) 

)

ImageProjectRouter.delete(

    "/image/delete/:id",
    userAuth.VerifyToken,
    (req, res) => imageControllers.delete(req, res) 

)