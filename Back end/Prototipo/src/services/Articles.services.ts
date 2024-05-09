import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeArticles,
    typeExpectationArticles,
    typeUpdateArticles,
    typeUpdateExpectationArticles

} from "../schemas"

export class ArticleServices {

    async create(

        body: typeArticles,
        userId: number

    ): Promise <typeExpectationArticles> {

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

        const article = await prisma.article.findFirst(
            {
                where: { 
                    title: body.title
                } 
            }
        )
        
        if (article) {
            throw new AppError(404, "Article already exists")
        }

        const data = await prisma.article.create(
            {   
        
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

        return data   
    }

    async getOne(id:number) {
        if (!id) {
            throw new AppError(404, "Id not found")
        }

        const data = await prisma.article.findFirst(
            {
                where:{id},
                include: {
                    image: true
                }
            }
        )

        if (!data) {
            throw new AppError(404, "Article not found")
        }

        return data
    }

    async findMany() {
        const data = await prisma.article.findMany(
            {
                include:{
                    image: true
                }
            }
        )
    
        return data 
    }

    async Update(

        body: typeUpdateArticles,
        userId: number,
        id: number
    
    ): Promise <typeUpdateExpectationArticles>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }

        const article = await prisma.article.findFirst(
            {
                where: { id }
            }
        )

        if (!article) {
            throw new AppError(404, "Article not foud")
        }
        
        const data = await prisma.article.update(
            {
                where: { id },
                data: body
            }
        )

        return data
    }

    async delete(id: number): Promise<void> {
        const article = await prisma.article.findFirst(
            {
                where: { id }
            }
        )

        if (!article) {
            throw new AppError(404, "Article not foud")
        }

        await prisma.article.delete({ where: { id } })
    }
}