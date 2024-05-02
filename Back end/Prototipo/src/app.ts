import "reflect-metadata"
import "dotenv/config"
import "express-async-errors"

import express, { json } from "express"
import helmet from "helmet"
import cors from "cors"

import { HandleErrors } from "./middlewares"

import {
     
    UserRouter, 
    ProfileRouter,
    SocialMidiaRouter,
    HobbyRouter,
    SkillRouter,
    JobExperienceRouter,
    EducationRouter,
    ProjectsRouter,
    ArticlesRouter

} from "./routers"
import { MessageRouter } from "./routers/Message.routers"

export const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

app.use("/users", UserRouter)
app.use("/profile", ProfileRouter)
app.use("/socialMidia", SocialMidiaRouter)
app.use("/hobby", HobbyRouter)
app.use("/skill", SkillRouter)
app.use("/jobexperience", JobExperienceRouter)
app.use("/education", EducationRouter)
app.use("/projects", ProjectsRouter)
app.use("/articles", ArticlesRouter)
app.use("message", MessageRouter)

app.use(HandleErrors.execute)
