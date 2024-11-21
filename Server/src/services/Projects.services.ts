import { prisma } from "../database/prisma";
import { AppError } from "../erros";

import { IProject, IBodyProjects, IBodyUpdateProjects } from "../interfaces";

class ProjectsServices {
  async create(body: IBodyProjects, profileId: number): Promise<IProject> {
    const data = await prisma.project.create({
      data: {
        ...body,
        profileId,
      },
    });

    return data;
  }

  async getOne(id: number) {
    if (!id) {
      throw new AppError(404, "Id not found");
    }

    const data = await prisma.project.findFirst({
      where: { id },
      include: {
        image: true,
      },
    });

    if (!data) {
      throw new AppError(404, "Project not found");
    }

    return data;
  }

  async findMany() {
    const data = await prisma.project.findMany({
      include: {
        image: true,
      },
    });

    return data;
  }

  async Update(body: IBodyUpdateProjects, id: number): Promise<IProject> {
    const data = await prisma.project.update({
      where: { id },
      data: body,
      include: {
        image: true,
      },
    });

    return data;
  }

  async delete(id: number): Promise<void> {
    await prisma.project.delete({ where: { id } });
  }
}

export { ProjectsServices };
