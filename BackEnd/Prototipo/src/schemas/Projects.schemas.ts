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

const ProjectsSchema = projectsSchema.omit({
  id: true,
});

const ProjectsUpdateSchema = ProjectsSchema.partial();

type typeExpectationProjects = z.infer<typeof ProjectsSchema>;
type typeProjects = z.infer<typeof ProjectsSchema>;

type typeUpdateExpectationProjects = Partial<typeExpectationProjects>;
type typeUpdateProjects = Partial<typeProjects>;

export {
  projectsSchema,
  ProjectsSchema,
  ProjectsUpdateSchema,
  typeExpectationProjects,
  typeProjects,
  typeUpdateExpectationProjects,
  typeUpdateProjects,
};
