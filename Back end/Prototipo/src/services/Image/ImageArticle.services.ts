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

export class ImageArticleServices {

    async create(

        path: string,
        userId: number,
        id: number

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
            throw new AppError(404, "Profile does not match user")
        }

        const data = await prisma.imageArticle.create(
            {
                data: {
                    path,
                    articleId: id
                } 
            }
        )

        return ImageReturnSchema.parse(data)   
    }

    async getOne(id: number) {
        const data = await prisma.imageArticle.findFirst({
            where:{id}
        })

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
            throw new AppError(404, "Profile does not match user")
        }
        
        
        const data = await prisma.imageArticle.update(
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
            throw new AppError(404, "Profile does not match user")
        }

        const image = await prisma.imageArticle.findFirst()

        if (!image) {
            throw new AppError(404, "Image not Foud")
        }

        return await prisma.imageArticle.delete(
            {
                where: {id: image.id}
            }
        )

    }
}