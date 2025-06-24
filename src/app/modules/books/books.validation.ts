import { z } from "zod";

export const booksValidation = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    author: z.string({ required_error: "Author is required" }),
    genre: z.string({ required_error: "Genre is required" }),
    isbn: z.string({ required_error: "Isbn is required" }),
    description: z.string({ required_error: "description is required" }),
    copies: z.number({ required_error: "Copies is required" }),
    available: z.boolean().optional(),
  }),
});
