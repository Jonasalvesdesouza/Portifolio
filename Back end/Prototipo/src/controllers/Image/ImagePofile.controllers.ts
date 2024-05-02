import { inject, injectable } from "tsyringe"
import { ImageProfileServices } from "../../services"
import { Request, Response } from "express"

@injectable()
export class ImageProfileControllers {
    
    constructor(

        @inject(ImageProfileServices)
        private imageServices: ImageProfileServices

    ) {}

    async create(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        console.dir(req.body, { depth: true })

        const response = await this.imageServices.create(
            req.body,
            Number(userId)
        )

        return res.status(201).json(response)
    }

    async update(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        const response = await this.imageServices.Update(
            req.body,
            Number(userId)
        )

        return res.status(200).json(response)
    }

    async findFirst(

        req: Request,
        res: Response

    ): Promise<Response>{
        
        const response = await this.imageServices.findFirst()

        return res.status(200).json(response)
    }

    async delete(

        req: Request,
        res: Response

    ): Promise <Response>{
        const userId = res.locals.decode.id

        await this.imageServices.delete(Number(userId))

        return res.status(204).json()

    }

}