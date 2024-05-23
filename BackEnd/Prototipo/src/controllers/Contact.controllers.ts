import { inject, injectable } from "tsyringe";
import { ContactServices } from "../services";
import { Request, Response } from "express";

@injectable()
class ContactControllers {
  constructor(
    @inject(ContactServices)
    private contactService: ContactServices
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const profileId = Number(res.locals.profileId);

    const response = await this.contactService.create(req.body, profileId);

    return res.status(201).json(response);
  }

  async findFirst(req: Request, res: Response): Promise<Response> {
    const contactId = Number(req.params.id);

    const response = await this.contactService.findFirst(contactId);

    return res.status(200).json(response);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const contactId = Number(req.params.id);

    const response = await this.contactService.Update(req.body, contactId);

    return res.status(200).json(response);
  }
}

export { ContactControllers };
