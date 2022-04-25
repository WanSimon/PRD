import { Static, Type } from "@sinclair/typebox";
import { UserGender, Field } from "@prisma/client";

export const commentSchema = Type.Object({
  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  content: Type.String({
    examples: ["你做的饭饭真的很好吃"],
  }),
  like: Type.Number({
    examples: [0],
    minimum: 0,
  }),
  dislike: Type.Number({
    examples: [0],
    minimum: 0,
  }),

  userId: Type.String({
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  articleId: Type.String({
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  createdAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  updatedAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  user: Type.Object({
    id: Type.String({
      format: "uuid",
      examples: ["550e8400-e29b-41d4-a716-446655440000"],
    }),
    name: Type.String({
      examples: ["张三"],
    }),
  }),
});

export const characteristicSchema = Type.Object({
  // id        String   @id //特点id
  // userId    String   @map("user_id") //用户id
  // articleId String?  @map("article_id") //文章id
  // field     Field    @map("field") //特点类别
  // content   String   @db.VarChar(32) //特点内容
  // createdAt DateTime @default(now()) //创建时间
  // updatedAt DateTime @updatedAt //更新时间
  // user      User     @relation(fields: [userId], references: [id])
  // article   Article? @relation(fields: [articleId], references: [id])

  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  content: Type.String({
    examples: ["你做的饭饭真的很好吃"],
  }),
  field: Type.Enum(Field, {
    examples: [Field.HOBBY],
  }),

  //   userId: Type.String({
  //     examples: ["550e8400-e29b-41d4-a716-446655440000"],
  //   }),
  user: Type.Object({
    id: Type.String({
      format: "uuid",
      examples: ["550e8400-e29b-41d4-a716-446655440000"],
    }),
    name: Type.String({
      examples: ["张三"],
    }),
  }),

  createdAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  updatedAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
});

export const articleSchema = Type.Object({
  id: Type.String({
    format: "uuid",
    examples: ["550e8400-e29b-41d4-a716-446655440000"],
  }),
  title: Type.String({
    examples: ["我是一个小饭饭"],
    maxLength: 32,
  }),
  content: Type.String({
    examples: ["我不仅喜欢吃饭而且还很喜欢做饭，饭饭永远是我的最爱"],
  }),
  like: Type.Number({
    examples: [0],
    minimum: 0,
  }),
  dislike: Type.Number({
    examples: [0],
    minimum: 0,
  }),
  isDeleted: Type.Boolean({
    examples: [false],
  }),
  createdAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  updatedAt: Type.String({
    format: "date-time",
    examples: ["2020-01-01T00:00:00.000Z"],
  }),
  characteristic: Type.Optional(
    Type.Array(
      Type.Object({
        id: Type.String({
          format: "uuid",
          examples: ["550e8400-e29b-41d4-a716-446655440000"],
        }),
        content: Type.String({
          examples: ["你做的饭饭真的很好吃"],
          maxLength: 32,
        }),
      })
    )
  ),
  //comments
  //author
  //authorId
  //
  //characteristics
});
