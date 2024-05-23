import { z } from "zod";

const projectsSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  webSite: z.string().min(1),
  gitHub: z.string().min(1),
  category: z.string().min(1),
  subCategory: z.string().min(1),
});

const BodyProjectsSchema = projectsSchema.omit({
  id: true,
});

const ProjectsUpdateSchema = BodyProjectsSchema.partial();

export { projectsSchema, BodyProjectsSchema, ProjectsUpdateSchema };
