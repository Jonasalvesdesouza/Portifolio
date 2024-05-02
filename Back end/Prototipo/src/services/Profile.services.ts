import { injectable } from "tsyringe"
import { prisma } from "../database/prisma"

import {

    typeCreateProfile, 
    typeProfileFull, 
    typeUpdateProfile 

} from "../schemas"
import { AppError } from "../erros"

@injectable()
export class ProfileServices {

    async create(

        body: typeCreateProfile,
        userId: number

    ) {
        const profile = await prisma.profile.findFirst(
            {
                where:{ userId}
            }
        )

        if (profile) {
            throw new AppError(404, "Not foud")
        }
        const data = await prisma.profile.create(
            {
                data:{
                    ...body,
                    userId
                }
            }
        )

        return data
    } 

    async findFirst(): Promise <typeProfileFull | null> {

        const data = await prisma.profile.findFirst(

            {
                include: {
                    contact: true,
                    address: true,
                    image: true,

                    socialMedia: true,
                    hobby: true,
                    skill: true,
                    jobExperience: true,
                    education: true,
                    projects: true,
                    articles: true,
                    message: true
                    
                }
            }
        )

        if (!data) {
            throw new AppError(404, "Not Data")

          }
        const { contact, ...rest } = data

        if (!contact) {
            return { ...rest, contact: null }
          }      

        const validatedContact = { ...contact, profileId: contact.profileId ?? null }


        return {
          ...rest,
          contact: validatedContact,
        };
    }

    async update(

        id: number,
        body: typeUpdateProfile
        
    ): Promise <typeCreateProfile> {

        const data = await prisma.profile.update(
            {
                where: {id},
                data: body
            }
        )

        return data
    }

}