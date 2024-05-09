import { sign } from "jsonwebtoken"
import { compare, hash } from "bcrypt"
import { injectable } from "tsyringe"

import { prisma } from "../database/prisma"
import { AppError } from "../erros/appError"
import { 

    typeCreateUser, 
    typeLoginUser,
    UserReturnSchema, 
    typeUserReturnSchema, 
    typeLoginReturn,
    typeUpdateUser

} from "../schemas"
import { jwtConfig } from "../configs"

@injectable()
export class UserServices {
    
    async userRegister(body: typeCreateUser): Promise <typeUserReturnSchema> {

        
        if (!body.password) {
            throw new AppError(400, "Password is required")
        }
        
        const hashedPassword = await hash(body.password, 10)
        
        const existingUser = await prisma.user.findFirst()

        if (existingUser) {

            throw new AppError(409, "User already exists")

        }

        const newUser = await prisma.user.create({
            data: {
                ...body,
                password: hashedPassword,
            },
        })

        return UserReturnSchema.parse(newUser)
    }

    async login(
        { 

            email, 
            password 

        }: typeLoginUser

    ): Promise <typeLoginReturn> {
        
        const user = await prisma.user.findFirst(
            { 
                where: { email }, 
                include: { profile: true }
            }
        )


            if(!user){
            throw new AppError(404, "User not exists")
        }

        const comparePassword = await compare(password, user.password)

        if(!comparePassword){
            throw new AppError(401, "Email and password doens't match")
        }
       
        const {

            secret, 
            expiresIn 

        } = jwtConfig()
   
        const token: string = sign(
            {id: user.id},
            secret, 
            {
                subject: user.id.toString(), 
                expiresIn
            }
        )

        return {

            accessToken: token, 
            user: UserReturnSchema.parse(user)

        }
    }

    async update(

        id: number, 
        {

            email, 
            password, 
            name

        }:typeUpdateUser

    ): Promise <typeUpdateUser> {
        
        if (password) {

            const hashedPassword = await hash(password, 10)

            const user = await prisma.user.update(
                {
                    where: {id},
                    data: {password: hashedPassword}
                }
            )
    
            return UserReturnSchema.parse(user)
        }

        if (email) {
            const user = await prisma.user.update(
                {
                    where: {id},
                    data: {email: email}
                }
            )
    
            return UserReturnSchema.parse(user)
        }


        const user = await prisma.user.update(
            {
                where: {id},
                data: {name: name}
            }
        )

        return UserReturnSchema.parse(user)
    }

    async getUser(id: number): Promise<typeUserReturnSchema> {

        if (!id) {
            throw new AppError(404, "User id required.")
        }
        
        const user = await prisma.user.findFirst(
            { 
                where: { id },
                include: { profile: true } 
            }
        )

        if (!user) {
            throw new AppError(404, "User not found")
        }

        return UserReturnSchema.parse(user)
    }
}
