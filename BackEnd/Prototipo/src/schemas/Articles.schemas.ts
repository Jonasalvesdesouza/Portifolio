import { z } from "zod";
import { ImageSchema } from "./Image.schemas";

export const articlesSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  imageId: z.number().positive().nullish(),
});

export const ArticlesSchema = articlesSchema.omit({
  id: true,
});

export const ArticleReturnSchema = articlesSchema
  .omit({
    imageId: true,
  })
  .extend({
    image: ImageSchema.nullish(),
  });

export const ArticlesUpdateSchema = ArticlesSchema.partial();

export type typeExpectationArticles = z.infer<typeof ArticlesSchema>;
export type typeArticles = z.infer<typeof ArticlesSchema>;

export type typeUpdateExpectationArticles = Partial<typeExpectationArticles>;
export type typeUpdateArticles = Partial<typeArticles>;
