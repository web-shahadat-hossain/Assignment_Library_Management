"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowController = void 0;
const books_model_1 = require("../books/books.model");
const borrow_model_1 = require("./borrow.model");
const createBorrowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { book, quantity, dueDate } = req.body;
        const foundBook = yield books_model_1.Books.findById(book);
        if (!foundBook) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        yield foundBook.borrowCopies(quantity);
        const borrow = yield borrow_model_1.Borrow.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllBorrowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = yield borrow_model_1.Borrow.aggregate([
            {
                $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "book",
                },
            },
            {
                $unwind: "$book",
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$book.title",
                        isbn: "$book.isbn",
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        res.status(201).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: borrow,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.borrowController = {
    createBorrowController,
    getAllBorrowController,
};
