import { z } from "zod"
import fs from "fs"

const MaxFileSize = 5000000
const AcceptedImageTypes = [

  "image/jpeg", 
  "image/jpg", 
  "image/png", 
  "image/webp"

]
const isBuffer = (value: any): value is Buffer => {

  return Buffer.isBuffer(value)

}

export const imageSchema = z.object(

  {

    id: z.number().positive(),
    name: z.string().min(1),
    data: z.custom((file) => {
      if (!file || !file.path) return false; // Verifica se o arquivo foi enviado
      const stats = fs.statSync(file.path);
      const fileSize = stats.size;
      const fileType = file.type;
      return fileSize <= MaxFileSize && AcceptedImageTypes.includes(fileType);
    }, {
      message: "Invalid image file."
    }).refine(isBuffer, { 
      message: "Data must be a Buffer.",
      path: ["data"]
    })
  }

)

export const ImageSchema = imageSchema.omit(

  {
    id:true
  }

)
export const ImageReturnSchema = imageSchema.pick(

  {
    id:true,
    name: true,
    data: true
  }
  
)

export const ImageUpdateSchema = ImageSchema.partial()

export type typeExpectationImage = z.infer<typeof ImageSchema> 
export type typeImage = z.infer<typeof ImageSchema>

export type typeUpdateImage = Partial<typeImage>
export type typeUpdateImageExpect = Partial<typeImage>
