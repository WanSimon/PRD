import { Static, Type } from "@sinclair/typebox";

export const baseParamsSchema = Type.Object({
  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
});

export type BaseParams = Static<typeof baseParamsSchema>;
