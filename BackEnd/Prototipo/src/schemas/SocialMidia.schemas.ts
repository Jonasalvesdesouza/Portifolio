import { z } from "zod";

const socialMediaSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  link: z.string().min(1),
});

const SocialMediaSchema = socialMediaSchema.omit({
  id: true,
});

const SocialMediaUpdateSchema = SocialMediaSchema.partial();

type typeExpectationSocialMedia = z.infer<typeof SocialMediaSchema>;
type typeSocialMedia = z.infer<typeof SocialMediaSchema>;

type typeUpdateSocialmediaExpct = Partial<typeExpectationSocialMedia>;
type typeUpdateSocialMedia = Partial<typeSocialMedia>;

export {
  socialMediaSchema,
  SocialMediaSchema,
  SocialMediaUpdateSchema,
  typeExpectationSocialMedia,
  typeSocialMedia,
  typeUpdateSocialmediaExpct,
  typeUpdateSocialMedia,
};
