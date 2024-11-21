import { z } from "zod";
import { socialMediaSchema, BodySocialMediaSchema } from "../schemas";

type ISocialMedia = z.infer<typeof socialMediaSchema>;
type IBodySocialMedia = z.infer<typeof BodySocialMediaSchema>;
type IBodyUpdateSocialMedia = Partial<IBodySocialMedia>;

export { ISocialMedia, IBodySocialMedia, IBodyUpdateSocialMedia };
