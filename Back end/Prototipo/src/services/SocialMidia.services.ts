import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeExpectationImage,
    typeImage,
    typeUpdateImage,
    typeUpdateImageExpect

} from "../schemas"

export class ImageServices {

    async create(

        body: typeImage,
        userId: number

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

        const data = await prisma.image.create(
            {
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

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
        
        const data = await prisma.image.update(
            {
                where: { id: profile.id },
                data: body
            }
        )

        return data
    }
}