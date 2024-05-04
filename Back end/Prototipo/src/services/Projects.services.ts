import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeProjects,
    typeExpectationProjects,
    typeUpdateProjects,
    typeUpdateExpectationProjects

} from "../schemas"

export class ProjectsServices {

    async create(

        body: typeProjects,
        userId: number

    ): Promise <typeExpectationProjects> {

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

        const project = await prisma.project.findFirst(
            {
                where: { 
                    title: body.title
                } 
            }
        )
        
        if (project) {
            throw new AppError(404, "Project already exists");
        }

        const data = await prisma.project.create(
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

        const data = await prisma.project.findFirst(
            {
                where:{id},
                include: {
                    image: true
                }
            }
        )

        if (!data) {
            throw new AppError(404, "Project not found")
        }

        return data
    }

    async findMany() {
        const data = await prisma.project.findMany(
            {
                include: {
                    image: true
                }
            }
        )
    
        return data 
    }

    async Update(

        body: typeUpdateProjects,
        userId: number,
        id: number
    
    ): Promise <typeUpdateExpectationProjects>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }

        const project = await prisma.project.findFirst(
            {
                where: { id }
            }
        )

        if (!project) {
            throw new AppError(404, "Project not foud")
        }
        
        const data = await prisma.project.update(
            {
                where: { id },
                data: body
            }
        )

        return data
    }

    async delete(id: number): Promise<void> {
        const project = await prisma.project.findFirst(
            {
                where: { id }
            }
        )

        if (!project) {
            throw new AppError(404, "Project not foud")
        }

        await prisma.project.delete({ where: { id } })
    }
}