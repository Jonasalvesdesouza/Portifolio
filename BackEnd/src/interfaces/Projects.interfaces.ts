import { z } from "zod";
import { BodyProjectsSchema, projectsSchema } from "../schemas";

type IProject = z.infer<typeof projectsSchema>;
type IBodyProjects = z.infer<typeof BodyProjectsSchema>;
type IBodyUpdateProjects = Partial<IBodyProjects>;

export { IProject, IBodyProjects, IBodyUpdateProjects };
