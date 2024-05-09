import { inject, injectable } from "tsyringe"
import { ImageProjectServices } from "../../services"
import { Request, Response } from "express"
import { AppError } from "../../erros";

@injectable()
export class ImageProjectControllers {
    
    constructor(

        @inject(ImageProjectServices)
        private imageServices: ImageProjectServices

    ) {}

    async create(

        req: Request,
        res: Response

    ): Promise <Response> {
      
        const userId = Number(res.locals.decode.id)
        const projectIdId = Number(req.params.id)
        const path = req.file ? req.file.path : undefined

        if (!path) {
            return res.status(400).json({ error: 'Nenhum arquivo foi enviado na requisição.' });
        }

        const response = await this.imageServices.create(
            userId, 
            projectIdId, 
            path
        )

        return res.status(201).json(response)
         
    }

    async update(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = Number(res.locals.decode.id)
        const imageId = Number(req.params.id)
        const path = req.file ? req.file.path : undefined

        if (!path) {
            return res.status(400).json({ error: 'Nenhum arquivo foi enviado na requisição.' });
        }

        const response = await this.imageServices.Update(
            path,
            userId,
            imageId
        )

        return res.status(200).json(response)
    }

    async getOne(

        req: Request,
        res: Response

    ): Promise<Response>{
        const id = req.params.id
        
        const response = await this.imageServices.getOne(Number(id))

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