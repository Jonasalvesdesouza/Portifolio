import { z } from "zod";

export const projectsSchema = z.object(
    {
        id: z.number().positive(),
        title: z.string().min(1),
        description: z.string().min(1),
        webSite: z.string().min(1),
        gitHub: z.string().min(1),
        category: z.string().min(1),
        subCategory: z.string().min(1),
    }
)

export const ProjectsSchema = projectsSchema.omit(
    {
        id: true
    }
)

export const ProjectsUpdateSchema = ProjectsSchema.partial()

export type typeExpectationProjects = z.infer<typeof ProjectsSchema>
export type typeProjects = z.infer<typeof ProjectsSchema>

export type typeUpdateExpectationProjects = Partial<typeExpectationProjects> 
export type typeUpdateProjects = Partial<typeProjects>