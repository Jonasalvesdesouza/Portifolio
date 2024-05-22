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

export const imageSchema = z.object({
  id: z.number().positive(),
  path: z.string().min(1),
});

export const ImageSchema = imageSchema.omit({
  id: true,
});
export const ImageReturnSchema = imageSchema.pick({
  id: true,
  path: true,
});

export const ImageUpdateSchema = ImageSchema.partial();

export type typeExpectationImage = z.infer<typeof ImageSchema>;
export type typeImage = z.infer<typeof ImageSchema>;

export type typeUpdateImage = Partial<typeImage>;
export type typeUpdateImageExpect = Partial<typeImage>;
