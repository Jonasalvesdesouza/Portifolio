import { z } from "zod";

const socialMediaSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  link: z.string().min(1),
});

const BodySocialMediaSchema = socialMediaSchema.omit({
  id: true,
});

const SocialMediaUpdateSchema = BodySocialMediaSchema.partial();

export { 
  socialMediaSchema, 
  BodySocialMediaSchema, 
  SocialMediaUpdateSchema 
};
