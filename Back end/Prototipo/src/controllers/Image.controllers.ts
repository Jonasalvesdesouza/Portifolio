import { inject, injectable } from "tsyringe"
import { ImageServices } from "../services"
import { Request, Response } from "express"

@injectable()
export class ImageControllers {
    
    constructor(

        @inject(ImageServices)
        private imageServices: ImageServices

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

}