import { inject, injectable } from "tsyringe";
import { ArticleServices } from "../services";
import { Request, Response } from "express";

@injectable()
export class ArticlesControllers {
  constructor(
    @inject(ArticleServices)
    private service: ArticleServices
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.decode.id;

    const response = await this.service.create(req.body, Number(userId));

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

  async update(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.decode.id);
    const id = Number(req.params.id);

    const response = await this.service.Update(req.body, userId, id);

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.service.delete(Number(req.params.id));

    return res.status(204).json();
  }
}