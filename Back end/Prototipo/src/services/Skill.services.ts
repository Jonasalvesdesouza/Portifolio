import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeExpctationSkill,
    typeSkill,
    typeUpdateExpectSkill,
    typeUpdateSkill

} from "../schemas"

export class SkillServices {

    async create(

        body: typeSkill,
        userId: number

    ): Promise <typeExpctationSkill> {

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

        const skill = await prisma.skill.findFirst(
            
            {
                where: {name: body.name} 
            } 
            
        )
        
        if (skill) {
            throw new AppError(404, "Skill already exists");
        }

        const data = await prisma.skill.create(
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
        const data = await prisma.skill.findFirst(
            {
                where: { id }
            }
        )

        return data
    }

    async findMany() {
        const data = await prisma.skill.findMany()

        return data 
    }

    async Update(

        body: typeUpdateSkill,
        userId: number,
        id: number
    
    ): Promise <typeUpdateExpectSkill>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }

        const skill = await prisma.skill.findFirst(
            {
                where: { id }
            }
        )

        if (!skill) {
            throw new AppError(404, "Skill not foud")
        }
        
        const data = await prisma.skill.update(
            {
                where: { id },
                data: body
            }
        )

        if (!data) {
            throw new AppError(404, "Skill midia not found")
        }

        return data
    }

    async delete(id: number): Promise<void> {
        const skill = await prisma.skill.findFirst(
            {
                where: { id }
            }
        )

        if (!skill) {
            throw new AppError(404, "skill Media not foud")
        }

        await prisma.skill.delete({ where: { id } })
    }
}