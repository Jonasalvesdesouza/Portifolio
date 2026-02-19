import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

import { UserServices } from "../services";

@injectable()
class UserControllers {
  constructor(
    @inject("UserServices")
    private userServices: UserServices
  ) {}

  async userRegister(req: Request, res: Response): Promise<Response> {
    const response = await this.userServices.userRegister(req.body);

    return res.status(201).json(response);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const response = await this.userServices.login(req.body);
    
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.decode.id);

    const response = await this.userServices.update(userId, req.body);

    return res.status(200).json(response);
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const response = await this.userServices.getUser(Number(id));

    return res.status(200).json(response);
  }
}

export { UserControllers };
