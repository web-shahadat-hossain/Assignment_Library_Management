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
exports.bookController = void 0;
const books_model_1 = require("./books.model");
const createBookController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = req.body;
        const newBook = yield books_model_1.Books.create(bookData);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newBook,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllBookController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = "createdAt", sort = "desc", limit = "10", } = req.query;
        const filterCondition = {};
        if (filter) {
            filterCondition.genre = filter;
        }
        const sortCondition = { [sortBy]: sort === "desc" ? -1 : 1 };
        const books = yield books_model_1.Books.find(filterCondition)
            .sort(sortCondition)
            .limit(Number(limit));
        res.status(201).json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        next(error);
    }
});
const getByIdBookController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const newBook = yield books_model_1.Books.findById(bookId);
        res.status(201).json({
            success: true,
            message: "Book retrieved successfully",
            data: newBook,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateByIdBookController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const copies = req.body;
        console.log(copies);
        const newBook = yield books_model_1.Books.updateOne({ _id: bookId }, { $set: Object.assign({}, copies) });
        res.status(201).json({
            success: true,
            message: "Book updated successfully",
            data: newBook,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteByIdBookController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        yield books_model_1.Books.deleteOne({ _id: bookId });
        res.status(201).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.bookController = {
    createBookController,
    getAllBookController,
    getByIdBookController,
    updateByIdBookController,
    deleteByIdBookController,
};
