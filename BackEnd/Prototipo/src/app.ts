import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";

import express, { json } from "express";
const path = require("path");
import helmet from "helmet";
import cors from "cors";

import { HandleErrors } from "./middlewares";

import {
  UserRouter,
  ProfileRouter,
  SocialMidiaRouter,
  HobbyRouter,
  SkillRouter,
  JobExperienceRouter,
  EducationRouter,
  ProjectsRouter,
  ArticlesRouter,
  MessageRouter,
} from "./routers";

export const app = express();

app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use("/uploads", express.static("uploads"));

app.use(json());

app.use("/user", UserRouter);
app.use("/profile", ProfileRouter);
app.use("/social-medias", SocialMidiaRouter);
app.use("/hobbys", HobbyRouter);
app.use("/skills", SkillRouter);
app.use("/job-experiences", JobExperienceRouter);
app.use("/educations", EducationRouter);
app.use("/projects", ProjectsRouter);
app.use("/articles", ArticlesRouter);
app.use("/messages", MessageRouter);

app.use(HandleErrors.execute);
