import { prisma } from "../database/prisma"
import { AppError } from "../erros"
import {

    AddressReturnSchema,
    typeExpectationAddress, 
    typeAddress, 
    typeUpdateAddress,
    typeUpdateAddressExpect

} from "../schemas"

export class AddressServices {

    async create(

        body: typeAddress,
        userId: number

    ): Promise <typeExpectationAddress> {

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
        
        const data = await prisma.address.create(
            {
                data: {
                    ...body,
                    profileId: profile.id
                } 
            }
        )

        return AddressReturnSchema.parse(data)   
    }

    async Update(

        body: typeUpdateAddress,
        userId: number
    
    ): Promise <typeUpdateAddressExpect>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }
        
        const data = await prisma.address.update(
            {
                where: { id: profile.id },
                data: body
            }
        )
        
        return AddressReturnSchema.parse(data)   
    }
}