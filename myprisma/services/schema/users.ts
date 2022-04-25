import { Static, Type } from "@sinclair/typebox";

export const userSchema = {
  id: Type.String({
    format: "uuid",
    examples: ["a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5"],
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
    Type.String({
      examples: "M",
    })
  ),
  role: Type.Optional(
    Type.String({
      examples: "boss",
    })
  ),
};
