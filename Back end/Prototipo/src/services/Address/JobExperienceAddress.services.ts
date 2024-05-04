import { prisma } from "../../database/prisma"
import { AppError } from "../../erros"
import {

   
    AddressJobExperienceReturnSchema,
    typeExpectationAddressJobExperience,
    typeAddressJobExperience,
    typeUpdateAddressJobExperience,
    typeUpdateAddressExpectJobExperience

} from "../../schemas"

export class JobExperienceAddressServices {

    async create(
        
        body: typeAddressJobExperience,
        userId: number

    ): Promise<typeExpectationAddressJobExperience> {
        if (!userId) {
            throw new AppError(409, "User ID is required")
        }

        const profile = await prisma.profile.findFirst({
            where: { userId }
        })

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }

        const latestJobExperience = await prisma.jobExperience.findFirst({
            where: { profileId: profile.id },
            orderBy: { updatedAt: 'desc' }
        })
        
        if (!latestJobExperience) {
            throw new AppError(404, 'No Job Experience found for this profile')
        }

        const Address = await prisma.addressJobExperience.findFirst({
            where: { jobExperienceId: latestJobExperience.id }
        })


        if (Address) {
            throw new AppError(409, 'Address already exists for this Job Experience')
        }

        const data = await prisma.addressJobExperience.create({
            data: {
                ...body,
                jobExperienceId: latestJobExperience.id
            }
        })

        return AddressJobExperienceReturnSchema.parse(data)
    }

    async getOne(id:number) {
        return await prisma.addressJobExperience.findFirst(
            {
                where: {id}
            }
        )
    }

    async Update(

        body: typeUpdateAddressJobExperience,
        userId: number,
        id:number
    
    ): Promise <typeUpdateAddressExpectJobExperience>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }
        
        const address = await prisma.addressJobExperience.findFirst(
            {
                where: { jobExperienceId: body.jobExperienceId }
            }
        )

        if (!address) {
            throw new AppError(404, "Address no exit!")
        }
        
        const data = await prisma.addressJobExperience.update(
            {
                where: { id },
                data: body
            }
        )
        
        return AddressJobExperienceReturnSchema.parse(data)   
    }

    async delete(

        id: number

    ): Promise <void> {
        const address = await prisma.addressJobExperience.findUnique({
            where: { id }
        });
    
        if (!address) {
            throw new AppError(404, "Address not found");
        }
    
        await prisma.addressJobExperience.delete({ where: { id } });
    }
}