import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeExpectationJobExperience,
    typeJobExperience,
    typeUpdateExpectationJobExperience,
    typeUpdateJobExperience

} from "../schemas"

export class JobExperienceServices {

    async create(

        body: typeJobExperience,
        userId: number

    ): Promise <typeExpectationJobExperience> {

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

        const data = await prisma.jobExperience.create(
            {   
        
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

        return data   
    }

    async getOne(id: number) {
        if (!id) {
            throw new AppError(404, "Id not found")
        }

        const data = await prisma.jobExperience.findFirst(
            {
                where: { id }
            }
        )

        if (!data) {
            throw new AppError(404, "Job experience not found")
        }

        return data
    }

    async findMany() {
        const data = await prisma.jobExperience.findMany(
            {
                include:{
                    address:true
                }
            }
        )
    
        return data 
    }

    async Update(

        body: typeUpdateJobExperience,
        userId: number,
        id: number
    
    ): Promise <typeUpdateExpectationJobExperience>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }

        const jobExperience = await prisma.jobExperience.findFirst(
            {
                where: { id }
            }
        )

        if (!jobExperience) {
            throw new AppError(404, "JobExperience not foud")
        }
        
        const data = await prisma.jobExperience.update(
            {
                where: { id },
                data: body
            }
        )

        return data
    }

    async delete(id: number): Promise<void> {
        const jobExperience = await prisma.jobExperience.findFirst(
            {
                where: { id }
            }
        )

        if (!jobExperience) {
            throw new AppError(404, "JobExperience not foud")
        }
        
        await prisma.jobExperience.delete({ where: { id } })
    }
}