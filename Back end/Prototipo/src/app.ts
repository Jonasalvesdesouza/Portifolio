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
    ContactRouter, 
    AddressRouter,
    ImageRouter

} from "./routers"

export const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

app.use("/users", UserRouter)
app.use("/profile", ProfileRouter)
app.use("/contact", ContactRouter)
app.use("/address", AddressRouter)
app.use("/image", ImageRouter)

app.use(HandleErrors.execute)

// app.use("/category")
// app.use("/subCategory")
// app.use("/socialMidia")
// app.use("/hobbie")
// app.use("/skill")
// app.use("/jobExperience")
// app.use("/Education")
// app.use("/project")
// app.use("/articles")
// app.use("message")