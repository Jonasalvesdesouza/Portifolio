import { z } from "zod";
import {
  contactSchema,
  userSchema,
  articlesSchema,
  educationSchema,
  hobbySchema,
  jobExperienceSchema,
  messageSchema,
  ImageSchema,
  projectsSchema,
  skillSchema,
  socialMediaSchema,
} from "./";

const profileSchema = z.object({
  id: z.number().positive(),
  profession: z.string().min(1),
  presentation: z.string().min(1),
  about: z.string().min(1),
  bio: z.string().min(1),
  userId: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),

  contactId: z.number().positive().nullable(),

  socialMedia: z.array(socialMediaSchema).nullish(),
  hobbies: z.array(hobbySchema).nullish(),
  skill: z.array(skillSchema).nullish(),
  jobExperience: z.array(jobExperienceSchema).nullish(),
  education: z.array(educationSchema).nullish(),
  projects: z.array(projectsSchema).nullish(),
  articles: z.array(articlesSchema).nullish(),
  message: z.array(messageSchema).nullish(),
});

const ProfileSchema = profileSchema.pick({
  profession: true,
  presentation: true,
  about: true,
  bio: true,
});

const ProfileUpdateSchema = ProfileSchema.partial();

const ProfileFullSchema = profileSchema
  .omit({
    userId: true,
    contactId: true,
    socialMedia: true,
    hobbies: true,
    skill: true,
    jobExperience: true,
    education: true,
    projects: true,
    articles: true,
    message: true,
  })
  .extend({
    user: userSchema.nullish(),
    contact: contactSchema.nullish(),
    image: ImageSchema.nullish(),
  });

type typeCreateProfile = z.infer<typeof ProfileSchema>;
type typeUpdateProfile = Partial<typeCreateProfile>;
type typeProfileFull = z.infer<typeof ProfileFullSchema>;

export {
  profileSchema,
  ProfileSchema,
  ProfileUpdateSchema,
  ProfileFullSchema,
  typeCreateProfile,
  typeUpdateProfile,
  typeProfileFull,
};
