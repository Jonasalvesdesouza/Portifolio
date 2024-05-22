import multer from "multer";
import path from "path";
import express, { Router } from "express";
import { container } from "tsyringe";

import { ImageProfileServices } from "../../services";
import { ImageProfileControllers } from "../../controllers";
import { userAuth } from "../../middlewares";
import uploadsConfig from "../../configs/multer.config";

const uploadDirectory = path.join(__dirname, "../../../");

const ImageProfileRouter = Router();
const upload = multer(uploadsConfig);

container.registerSingleton("ImageProfileServices", ImageProfileServices);
const imageControllers = container.resolve(ImageProfileControllers);

ImageProfileRouter.use("/uploads", express.static(uploadDirectory));

ImageProfileRouter.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(uploadDirectory, imageName));
});

ImageProfileRouter.post(
  "/image",
  userAuth.VerifyToken,
  upload.single("path"),
  (req, res) => imageControllers.create(req, res)
);

ImageProfileRouter.get("/image/get", (req, res) =>
  imageControllers.findFirst(req, res)
);

ImageProfileRouter.patch(
  "/image/:id",
  userAuth.VerifyToken,
  upload.single("path"),
  (req, res) => imageControllers.update(req, res)
);

ImageProfileRouter.delete("/image/:id", userAuth.VerifyToken, (req, res) =>
  imageControllers.delete(req, res)
);

export { ImageProfileRouter };
