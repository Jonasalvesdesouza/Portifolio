import { z } from "zod";

const hobbySchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
});

const HobbySchema = hobbySchema.omit({
  id: true,
});

const HobbyUpdate = HobbySchema.partial();

type typeExpectationHobby = z.infer<typeof HobbySchema>;
type typeHobby = z.infer<typeof HobbySchema>;

type typeExpectUpdateHobby = Partial<typeExpectationHobby>;
type typeUpdateHobby = Partial<typeHobby>;

export {
  hobbySchema,
  HobbySchema,
  HobbyUpdate,
  typeExpectationHobby,
  typeHobby,
  typeExpectUpdateHobby,
  typeUpdateHobby,
};
