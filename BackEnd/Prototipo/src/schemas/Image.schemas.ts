import { z } from "zod";
import fs from "fs";

const MaxFileSize = 5000000;
const AcceptedImageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const isBuffer = (value: any): value is Buffer => {
  return Buffer.isBuffer(value);
};

const imageSchema = z.object({
  id: z.number().positive(),
  path: z.string().min(1),
});

const ImageSchema = imageSchema.omit({
  id: true,
});
const ImageReturnSchema = imageSchema.pick({
  id: true,
  path: true,
});

const ImageUpdateSchema = ImageSchema.partial();

type typeExpectationImage = z.infer<typeof ImageSchema>;
type typeImage = z.infer<typeof ImageSchema>;

type typeUpdateImage = Partial<typeImage>;
type typeUpdateImageExpect = Partial<typeImage>;

export {
  isBuffer,
  imageSchema,
  ImageSchema,
  ImageReturnSchema,
  ImageUpdateSchema,
  typeExpectationImage,
  typeImage,
  typeUpdateImage,
  typeUpdateImageExpect,
};
