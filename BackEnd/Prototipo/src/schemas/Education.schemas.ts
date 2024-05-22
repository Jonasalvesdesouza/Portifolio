import { z } from "zod";

const educationSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  course: z.string().min(1),
  country: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  description: z.string().min(1),
  initialDate: z.string(),
  endDate: z.string(),
});

const EducationSchema = educationSchema.omit({
  id: true,
});

const EducationUpdateSchema = EducationSchema.partial();

type typeExpectationEducation = z.infer<typeof EducationSchema>;
type typeEducation = z.infer<typeof EducationSchema>;

type typeUpdateExpectationEducation = Partial<typeExpectationEducation>;
type typeUpdateEducation = Partial<typeEducation>;

export {
  educationSchema,
  EducationSchema,
  EducationUpdateSchema,
  typeExpectationEducation,
  typeEducation,
  typeUpdateExpectationEducation,
  typeUpdateEducation,
};
