import { Static, Type } from "@sinclair/typebox";

export const userSchema = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: "email" })),
});
export type User = Static<typeof userSchema>;
