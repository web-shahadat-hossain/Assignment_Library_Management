"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksValidation = void 0;
const zod_1 = require("zod");
exports.booksValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "title is required" }),
        author: zod_1.z.string({ required_error: "Author is required" }),
        genre: zod_1.z.string({ required_error: "Genre is required" }),
        isbn: zod_1.z.string({ required_error: "Isbn is required" }),
        description: zod_1.z.string({ required_error: "description is required" }),
        copies: zod_1.z.number({ required_error: "Copies is required" }),
        available: zod_1.z.boolean().optional(),
    }),
});
