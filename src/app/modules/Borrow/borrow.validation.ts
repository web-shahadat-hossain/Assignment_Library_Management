import { z } from "zod";

export const borrowValidation = z.object({
  body: z.object({
    book: z.string({ required_error: "Please provide Book Id" }),
    quantity: z.number({ required_error: "Please Provde Quentity" }),
    dueDate: z.string({ required_error: "Please Provide Due Date" }),
  }),
});
