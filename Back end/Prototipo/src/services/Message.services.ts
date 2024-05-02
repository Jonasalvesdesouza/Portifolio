import { prisma } from "../database/prisma"
import { AppError } from "../erros"

import {

    typeMessage,
    typeExpectationMessage

} from "../schemas"

export class MessageServices {

    async create(

        body: typeMessage,
        id:number
    
    ): Promise <typeExpectationMessage> {

        const data = await prisma.message.create(
            {   
        
                data: {
                    ...body,
                    profileId: id
                } 
            }
        )

        return data   
    }

    async getOne(id:number) {
        if (!id) {
            throw new AppError(404, "Id not found")
        }

        const data = await prisma.message.findFirst(
            {
                where:{id}
            }
        )

        if (!data) {
            throw new AppError(404, "Message not found")
        }

        return data
    }

    async findMany() {
        const data = await prisma.message.findMany()
    
        return data 
    }

    async delete(id: number): Promise<void> {
        const message = await prisma.message.findFirst(
            {
                where: { id }
            }
        )

        if (!message) {
            throw new AppError(404, "Message not foud")
        }

        await prisma.message.delete({ where: { id } })
    }
}