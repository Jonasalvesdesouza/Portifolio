import { inject, injectable } from "tsyringe";
import { ImageArticleServices } from "../../services";
import { Request, Response } from "express";

@injectable()
export class ImageArticleControllers {
  constructor(
    @inject(ImageArticleServices)
    private imageServices: ImageArticleServices
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.decode.id);
    const articlesId = Number(req.params.id);
    const path = req.file ? req.file.path : undefined;

    if (!path) {
      return res
        .status(400)
        .json({ error: "Nenhum arquivo foi enviado na requisição." });
    }

    const response = await this.imageServices.create(userId, articlesId, path);

    return res.status(201).json(response);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.decode.id);
    const imageId = Number(req.params.id);
    const path = req.file ? req.file.path : undefined;

    if (!path) {
      return res
        .status(400)
        .json({ error: "Nenhum arquivo foi enviado na requisição." });
    }

    const response = await this.imageServices.Update(path, userId, imageId);

    return res.status(200).json(response);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await this.imageServices.getOne(Number(id));

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.decode.id;

    await this.imageServices.delete(Number(userId));

    return res.status(204).json();
  }
}
