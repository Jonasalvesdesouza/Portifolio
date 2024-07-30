import { z } from "zod";
import { ArticleBodySchema, articlesSchema } from "../schemas/Articles.schemas";

type IArticles = z.infer<typeof articlesSchema>;
type IBodyArticles = z.infer<typeof ArticleBodySchema>;

type IbodyUpdate = Partial<IBodyArticles>;

export { IArticles, IBodyArticles, IbodyUpdate };
