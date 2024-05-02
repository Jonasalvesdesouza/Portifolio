import { prisma } from "../../database/prisma"
import { AppError } from "../../erros"
import {

    AddressProfileReturnSchema,
    typeExpectationAddressProfile,
    typeAddressProfile,
    typeUpdateAddressProfile,
    typeUpdateAddressExpectProfile 

} from "../../schemas"

export class ProfileAddressServices {

    async create(

        body: typeAddressProfile,
        userId: number

    ): Promise <typeExpectationAddressProfile> {

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

        const address = await prisma.addressProfile.findFirst(
            {
                where: { profileId: profile.id }
            }
        )

        if (address) {
            throw new AppError(404, "Not Found")
        }
        
        const data = await prisma.addressProfile.create(
            {
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

        return AddressProfileReturnSchema.parse(data)   
    }

    async findFirst() {
        const data = await prisma.addressProfile.findFirst()

        return data 
    }

    async Update(

        body: typeUpdateAddressProfile,
        userId: number
    
    ): Promise <typeUpdateAddressExpectProfile>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user")
        }
        
        const address = await prisma.addressProfile.findFirst(
            {
                where: { profileId: profile.id }
            }
        )

        if (!address) {
            throw new AppError(404, "Address no exit!")
        }
        
        const data = await prisma.addressProfile.update(
            {
                where: { id: profile.id },
                data: body
            }
        )
        
        return AddressProfileReturnSchema.parse(data)   
    }
}