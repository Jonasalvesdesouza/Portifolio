import { z } from "zod";
import { ImageSchema } from ".";

const articlesSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  imageId: z.number().positive().nullish(),
});

const ArticleBodySchema = articlesSchema.omit({
  id: true,
});
const ArticlesBodyUpdateSchema = ArticleBodySchema.partial();

const ReturnBodyArticleSchema = articlesSchema
  .omit({
    imageId: true,
  })
  .extend({
    image: ImageSchema.nullish(),
  });

export {
  articlesSchema,
  ArticleBodySchema,
  ArticlesBodyUpdateSchema,
  ReturnBodyArticleSchema,
};
