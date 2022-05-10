import { Static, Type } from "@sinclair/typebox";
import { Gender, UserRole } from "@prisma/client";

export const userSchema = Type.Object({
  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  avatar: Type.Optional(
    Type.String({
      format: "url",
      examples: ["https://example.com/avatar.png"],
    })
  ),
  name: Type.String({
    examples: ["WanSimon"],
    maxLength: 32,
  }),
  phone: Type.String({
    examples: ["18638585665"],
    length: 11,
  }),
  email: Type.Optional(
    Type.String({
      examples: ["2543141840@qq.com"],
      format: "email",
    })
  ),
  password: Type.String({
    examples: ["123456"],
    minLength: 6,
  }),
  birthday: Type.Optional(
    Type.String({
      format: "date-time",
      examples: ["2020-01-01T00:00:00.000Z"],
    })
  ),
  //TODO 枚举类型的实现Type.Enum
  gender: Type.Optional(
    Type.Enum(Gender, {
      examples: [Gender.M],
    })
  ),
  role: Type.Optional(
    Type.Enum(UserRole, {
      examples: [UserRole.ADMIN],
    })
  ),
  characteristics: Type.Optional(
    Type.Array(
      Type.Object({
        id: Type.String({
          format: "uuid",
          examples: ["550e8400-e29b-41d4-a716-446655440000"],
        }),
        content: Type.String({
          examples: ["你做的饭饭真的很好吃"],
        }),
      })
    )
  ),
  createdAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  updatedAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
});

export const userEllipse = Type.Object({
  name: Type.String({
    examples: ["分一杯羹"],
  }),
  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
});

export type User = Static<typeof userSchema>;
export type UserEllipse = Static<typeof userEllipse>;
