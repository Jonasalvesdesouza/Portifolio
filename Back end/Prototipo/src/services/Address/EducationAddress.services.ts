import { prisma } from "../../database/prisma"
import { AppError } from "../../erros"
import {

   
    AddressEducationReturnSchema,
    typeExpectationAddressEducation,
    typeAddressEducation,
    typeUpdateAddressEducation,
    typeUpdateAddressExpectEducation

} from "../../schemas"

export class EducationAddressServices {

    async create(
        body: typeAddressEducation,
        userId: number
    ): Promise<typeExpectationAddressEducation> {
        if (!userId) {
            throw new AppError(409, "User ID is required")
        }

        const profile = await prisma.profile.findFirst({
            where: { userId }
        })

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }

        const latestEducation = await prisma.education.findFirst({
            where: { profileId: profile.id },
            orderBy: { updatedAt: 'desc' }
        })

        if (!latestEducation) {
            throw new AppError(404, 'No Job Experience found for this profile')
        }

        const existingAddress = await prisma.addressEducation.findFirst({
            where: { educationId: latestEducation.id }
        })


        if (existingAddress) {
            throw new AppError(409, 'Address already exists for this Job Experience')
        }

        const data = await prisma.addressEducation.create({
            data: {
                ...body,
                educationId: latestEducation.id
            }
        })

        return AddressEducationReturnSchema.parse(data)
    }

    async getOne(id: number) {

        return await prisma.addressEducation.findFirst(
            {
                where:{educationId: id}
            }
        )
    }

    async Update(

        body: typeUpdateAddressEducation,
        userId: number,
        id: number
    
    ): Promise <typeUpdateAddressExpectEducation>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }
        
        const address = await prisma.addressEducation.findFirst(
            {
                where: { educationId: body.educationId }
            }
        )

        if (!address) {
            throw new AppError(404, "Address no exit!")
        }
        
        const data = await prisma.addressEducation.update(
            {
                where: { id },
                data: body
            }
        )
        
        return AddressEducationReturnSchema.parse(data)   
    }

    async delete(id: number): Promise<void> {
        const address = await prisma.addressJobExperience.findUnique({
            where: { id }
        })
    
        if (!address) {
            throw new AppError(404, "Address not found")
        }
    
        await prisma.addressJobExperience.delete({ where: { id } })
    }
}