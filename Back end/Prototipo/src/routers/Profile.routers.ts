import { Router } from "express"
import { container } from "tsyringe"
import { ProfileServices } from "../services"
import { ProfileControllers } from "../controllers"
import { ValidateBody, userAuth } from "../middlewares"
import { ProfileSchema, ProfileUpdateSchema } from "../schemas"
import { ProfileAddressRouter } from "./Address"
import { ContactRouter } from "./Contact.routers"
import { ImageProfileRouter } from "./Image"

export const ProfileRouter = Router()

container.registerSingleton("ProfileServices", ProfileServices)
const profileControllers = container.resolve(ProfileControllers)


ProfileRouter.post(
    "/",
    userAuth.VerifyToken,
    ValidateBody.execute(ProfileSchema),
    (req, res) => profileControllers.create(req, res)
)

ProfileRouter.get(
    "/",
    (req, res) => profileControllers.findFirst(req, res)
)

ProfileRouter.patch(
    "/update/:id",
    userAuth.VerifyToken,
    ValidateBody.execute(ProfileUpdateSchema),
    (req, res) => profileControllers.update(req, res)
)

ProfileRouter.use("/", ContactRouter)
ProfileRouter.use("/", ProfileAddressRouter)
ProfileRouter.use("/", ImageProfileRouter)
