import multer from "multer";
import path from "path";
import express, { Router } from "express";
import { container } from "tsyringe";

import { ImageArticleServices } from "../../services";
import { ImageArticleControllers } from "../../controllers";
import { userAuth } from "../../middlewares";
import uploadsConfig from "../../configs/multer.config";

const uploadDirectory = path.join(__dirname, "../../../");

export const ImageArticleRouter = Router();
const upload = multer(uploadsConfig);

container.registerSingleton("ImageArticleServices", ImageArticleServices);
const imageControllers = container.resolve(ImageArticleControllers);

ImageArticleRouter.use("/uploads", express.static(uploadDirectory));

ImageArticleRouter.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(uploadDirectory, imageName));
});

ImageArticleRouter.post(
  "/image/:id",
  userAuth.VerifyToken,
  upload.single("path"),
  (req, res) => imageControllers.create(req, res)
);

ImageArticleRouter.get("/image/get/:id", (req, res) =>
  imageControllers.getOne(req, res)
);

ImageArticleRouter.patch(
  "/image/update/:id",
  userAuth.VerifyToken,
  upload.single("path"),
  (req, res) => imageControllers.update(req, res)
);

ImageArticleRouter.delete("/image/delete", userAuth.VerifyToken, (req, res) =>
  imageControllers.delete(req, res)
);
