import { Router } from "express"
import { container } from "tsyringe"
import { ProjectsServices } from "../services"
import { ProjectsControllers } from "../controllers"
import { ValidateBody, userAuth } from "../middlewares"
import {
     
    ProjectsSchema, 
    ProjectsUpdateSchema 

} from "../schemas"
import { ImageProjectRouter } from "./Image"

export const ProjectsRouter = Router()

container.registerSingleton("ProjectsServices", ProjectsServices)
const Controllers = container.resolve(ProjectsControllers)

ProjectsRouter.post(

    "/",
    userAuth.VerifyToken,
    ValidateBody.execute(ProjectsSchema),
    (req, res) => Controllers.create(req, res) 

)

ProjectsRouter.get(

    "/get/:id",
    (req, res) => Controllers.getOne(req, res) 

)


ProjectsRouter.get(

    "/get",
    (req, res) => Controllers.findMany(req, res) 
)

ProjectsRouter.patch(

    "/update/:id",
    userAuth.VerifyToken,
    ValidateBody.execute(ProjectsUpdateSchema),
    (req, res) => Controllers.update(req, res) 

)

ProjectsRouter.delete(

    "/:id",
    userAuth.VerifyToken,
    (req, res) => Controllers.delete(req, res) 

)

ProjectsRouter.use(

    "/",
    ImageProjectRouter

)