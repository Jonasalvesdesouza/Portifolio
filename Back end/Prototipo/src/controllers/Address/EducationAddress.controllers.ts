import { inject, injectable } from "tsyringe"
import { EducationAddressServices } from "../../services"
import { Request, Response } from "express"

@injectable()
export class EducationAddressControllers {
    
    constructor(

        @inject(EducationAddressServices)
        private Services: EducationAddressServices

    ) {}

    async create(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        const response = await this.Services.create(
            req.body,
            Number(userId)
        )

        return res.status(201).json(response)
    }

    async getOne(

        req: Request,
        res: Response

    ): Promise<Response>{
        const id = req.params.id
        
        const response = await this.Services.getOne(Number(id))

        return res.status(200).json(response)
    }

    async update(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id
        const id = req.params.id

        const response = await this.Services.Update(
            req.body,
            Number(userId),
            Number(id)
        )

        return res.status(200).json(response)
    }

    async delete(

        req: Request,
        res: Response

    ): Promise<Response> {
        await this.Services.delete(Number(req.params.id))

        return res.status(204).json()
    }

}