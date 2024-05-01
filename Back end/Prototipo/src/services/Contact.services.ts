import { prisma } from "../database/prisma"
import { AppError } from "../erros";
import {

    ContactReturnSchema,
    typeContact, 
    typeExpectationContact, 
    typeUpdateContact,
    typeUpdateContactExpct

} from "../schemas"

export class ContactServices {

    async create(

        body: typeContact,
        userId: number

    ): Promise <typeExpectationContact> {

        if (!userId) {
            throw new AppError(409, "User is required")
        }

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )
        

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }
        
        const data = await prisma.contact.create(
            
            {
                data: {
                    ...body,
                    profileId: profile.id
                }
            }
        )

        
        return ContactReturnSchema.parse(data)   
    }

    async Update(

        body: typeUpdateContact,
        userId: number
    
    ): Promise <typeUpdateContactExpct>{

        const profile = await prisma.profile.findFirst(
            {
                where: {userId}
            }   
        )

        if (!profile) {
            throw new AppError(404, "Profile does not match user");
        }
        
        const data = await prisma.contact.update(
            {
                where: { id: profile.id },
                data: body
            }
        )

        return ContactReturnSchema.parse(data)   
    }
}