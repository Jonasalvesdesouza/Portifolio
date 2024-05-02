import { inject, injectable } from "tsyringe"
import { ContactServices } from "../services";
import { Request, Response } from "express";

@injectable()
export class ContactControllers {
    
    constructor(

        @inject(ContactServices)
        private contactService: ContactServices

    ) {}

    async create(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        const response = await this.contactService.create(
            req.body,
            Number(userId)
        )

        return res.status(201).json(response)
    }

    async findFirst(

        req: Request,
        res: Response

    ): Promise<Response>{
        
        const response = await this.contactService.findFirst()

        return res.status(200).json(response)
    }
    

    async update(

        req: Request,
        res: Response

    ): Promise <Response> {
        const userId = res.locals.decode.id

        const response = await this.contactService.Update(
            req.body,
            Number(userId)
        )

        return res.status(200).json(response)
    }

}