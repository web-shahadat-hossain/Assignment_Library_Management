"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrow = exports.borrowSchema = void 0;
const mongoose_1 = require("mongoose");
exports.borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Books",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    dueDate: {
        type: Date,
    },
});
exports.Borrow = (0, mongoose_1.model)("borrow", exports.borrowSchema);
