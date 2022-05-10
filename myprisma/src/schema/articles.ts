import { Static, Type } from "@sinclair/typebox";
import { Gender, Field } from "@prisma/client";
import { baseParamsSchema } from "./base";

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

//根据文章id查询评论
export const commentParamsSchema = baseParamsSchema;
//返回根据文章id查询的结果
export const commentDetailResponseSchema = Type.Object({
  success: Type.Boolean({
    examples: [true],
  }),
  data: Type.Optional(Type.Array(commentSchema)),
});

export const characteristicSchema = Type.Object({
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
export const characteristicQueryListResponseSchema = Type.Object({
  success: Type.Boolean({
    examples: [true],
  }),
  data: Type.Optional(
    Type.Array(
      Type.Object({
        id: Type.String({
          format: "uuid",
        }),
        field: Type.Enum(Field, {
          examples: [Field.CATEGORY],
        }),
        content: Type.String({
          examples: ["你做的饭饭真的很好吃"],
        }),
      })
    )
  ),
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
  author: Type.Optional(
    Type.Object({
      id: Type.String({
        format: "uuid",
        examples: ["550e8400-e29b-41d4-a716-446655440000"],
      }),
      name: Type.String({
        examples: ["张三"],
      }),
    })
  ),
});
//根据作者id查询文章
export const articleDetailParamsSchema = baseParamsSchema;
//返回根据作者id查询的结果
export const articleDetailResponseSchema = Type.Object({
  success: Type.Boolean({
    examples: [true],
  }),
  data: Type.Optional(Type.Array(articleSchema)),
});
//根据文章id查询文章
// export const articleDetailParamsSchema = baseParamsSchema;
//返回根据文章id查询的结果
// export const articleDetailQueryResponseSchema = Type.Object({
//   success: Type.Boolean({
//     examples: [true],
//   }),
//   data: Type.Optional(articleSchema),
// });

//根据文章特点请求返回文章列表
//分页、关键词
export const articleListQueryStringSchema = Type.Object({
  field: Type.Enum(Field, {}),
  page: Type.Number({
    examples: [1],
  }),
  size: Type.Number({
    examples: [10],
  }),
  searchList: Type.Optional(
    Type.Array(
      Type.Object({
        id: Type.String({
          format: "uuid",
          examples: ["550e8400-e29b-41d4-a716-446655440000"],
        }),
        content: Type.String({
          examples: ["古韵古香"],
        }),
      })
    )
  ),
});

//返回根据文章特点请求返回文章列表
export const articleListQueryResponseSchema = Type.Object({
  success: Type.Boolean({
    examples: [true],
  }),
  data: Type.Optional(
    Type.Array(
      Type.Object({
        id: Type.String({
          format: "uuid",
          examples: ["550e8400-e29b-41d4-a716-446655440000"],
        }),
        title: Type.String({
          examples: ["我是一个小饭饭"],
        }),
        like: Type.Number({
          examples: [0],
          minimum: 0,
        }),
        authorId: Type.String({
          format: "uuid",
          examples: ["550e8400-e29b-41d4-a716-446655440000"],
        }),
        authorName: Type.String({
          examples: ["张三"],
        }),
        createdAt: Type.String({
          format: "date-time",
          examples: ["2020-01-01T00:00:00.000Z"],
        }),
      })
    )
  ),
});

export type CommentDetail = Static<typeof commentSchema>;
export type CommentQueryString = Static<typeof commentParamsSchema>;
export type CommentQueryResponse = Static<typeof commentDetailResponseSchema>;

export type CharacteristicDetail = Static<typeof characteristicSchema>;

export type ArticleDetail = Static<typeof articleSchema>;
//根据作者的id查询文章
export type ArticleQueryString = Static<typeof articleDetailParamsSchema>;
export type ArticleQueryResponse = Static<typeof articleDetailResponseSchema>;
//根据特点查询文章的标题

// //根据文章的id查询文章的详情
// export type ArticleDetailQueryString = Static<
//   typeof articleDetailQueryStringSchema
// >;
// export type ArticleDetailQueryResponse = Static<
//   typeof articleDetailQueryResponseSchema
// >;
