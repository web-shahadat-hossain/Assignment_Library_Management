"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowValidation = void 0;
const zod_1 = require("zod");
exports.borrowValidation = zod_1.z.object({
    body: zod_1.z.object({
        book: zod_1.z.string({ required_error: "Please provide Book Id" }),
        quantity: zod_1.z.number({ required_error: "Please Provde Quentity" }),
        dueDate: zod_1.z.string({ required_error: "Please Provide Due Date" }),
    }),
});
