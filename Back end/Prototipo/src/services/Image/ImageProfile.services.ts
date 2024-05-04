import { Request } from "express"
import { prisma } from "../../database/prisma"
import { AppError } from "../../erros"

import {

    ImageReturnSchema,
    typeExpectationImage,
    typeImage,
    typeUpdateImage,
    typeUpdateImageExpect

} from "../../schemas"

export class ImageProfileServices {

    async create(

        body: typeImage,
        userId: number,

    ): Promise <typeExpectationImage> {


        if (!userId) {
            throw new AppError(409, "User ID is required")
        }

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }

        const existingImage = await prisma.imageProfile.findFirst({
            where: { profileId: profile.id },
          });

          if (existingImage) {
            throw new AppError(409, "Image already exists for this profile");
          }

        const data = await prisma.imageProfile.create(
            {
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

        return ImageReturnSchema.parse(data)   
    }

    async findFirst() {
        const data = await prisma.imageProfile.findFirst()

        return data 
    }

    async Update(

        body: typeUpdateImage,
        userId: number
    
    ): Promise <typeUpdateImageExpect>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }
        
        
        const data = await prisma.imageProfile.update(
            {
                where: { id: profile.id },
                data: body
            }
        )

        return ImageReturnSchema.parse(data)   
    }

    async delete(userId: number) {

        const profile = await prisma.profile.findFirst(
            {
                where:{userId}
            }
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }

        const image = await prisma.imageProfile.findFirst()

        if (!image) {
            throw new AppError(404, "Image not Foud");
        }

        return await prisma.imageProfile.delete(
            {
                where: {id: image.id}
            }
        )

    }
}