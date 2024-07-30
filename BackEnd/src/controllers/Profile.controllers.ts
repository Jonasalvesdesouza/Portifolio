import { inject, injectable } from "tsyringe";
import { ProfileServices } from "../services/Profile.services";
import { Request, Response } from "express";

@injectable()
class ProfileControllers {
  constructor(
    @inject(ProfileServices)
    private profileService: ProfileServices
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.decode.id);
    const userName = res.locals.userName;

    const response = await this.profileService.create(
      req.body,
      userId,
      userName
    );

    return res.status(201).json(response);
  }

  async findFirst(req: Request, res: Response): Promise<Response> {
    const response = await this.profileService.findFirst();

    return res.status(200).json(response);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const profileId = Number(req.params.id);

    const response = await this.profileService.update(profileId, req.body);

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.profileService.delete(Number(req.params.id));

    return res.status(204).json();
  }
}

export { ProfileControllers };
