import { inject, injectable } from "tsyringe";
import { MessageServices } from "../services";
import { Request, Response } from "express";

@injectable()
export class MessageControllers {
  constructor(
    @inject(MessageServices)
    private service: MessageServices
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await this.service.create(req.body, Number(id));

    return res.status(201).json(response);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await this.service.getOne(Number(id));

    return res.status(200).json(response);
  }

  async findMany(req: Request, res: Response): Promise<Response> {
    const response = await this.service.findMany();

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.service.delete(Number(req.params.id));

    return res.status(204).json();
  }
}
