import { inject, injectable } from "tsyringe"
import { AddressServices } from "../services"
import { Request, Response } from "express"

@injectable()
export class AddressControllers {
    
    constructor(

        @inject(AddressServices)
        private addressServices: AddressServices

    ) {}

    async create(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        const response = await this.addressServices.create(
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

        const response = await this.addressServices.Update(
            req.body,
            Number(userId)
        )

        return res.status(200).json(response)
    }

}