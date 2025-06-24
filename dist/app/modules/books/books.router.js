"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const books_validation_1 = require("./books.validation");
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(books_validation_1.booksValidation), books_controller_1.bookController.createBookController);
router.get("/:bookId", books_controller_1.bookController.getByIdBookController);
router.put("/:bookId", books_controller_1.bookController.updateByIdBookController);
router.delete("/:bookId", books_controller_1.bookController.deleteByIdBookController);
router.get("/", books_controller_1.bookController.getAllBookController);
exports.booksRouters = {
    router,
};
