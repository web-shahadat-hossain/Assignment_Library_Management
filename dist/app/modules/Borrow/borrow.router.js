"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const borrow_validation_1 = require("./borrow.validation");
const borrow_controller_1 = require("./borrow.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(borrow_validation_1.borrowValidation), borrow_controller_1.borrowController.createBorrowController);
router.get("/", borrow_controller_1.borrowController.getAllBorrowController);
exports.borrowRouters = {
    router,
};
