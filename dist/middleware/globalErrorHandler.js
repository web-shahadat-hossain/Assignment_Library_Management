"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
const validationZodErrorHandler_1 = require("../errors/validationZodErrorHandler");
const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        const formattedError = (0, validationZodErrorHandler_1.validationZodErrorHandler)(err);
        res.status(400).json({
            message: "Validation failed",
            success: false,
            error: {
                name: "ZodError",
                errors: formattedError.errorMessages,
            },
        });
        return;
    }
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        res.status(400).json({
            message: "Validation failed",
            success: err,
        });
        return;
    }
    res.status(500).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.message) || "Internal Server Error",
        error: {
            name: (err === null || err === void 0 ? void 0 : err.name) || "Error",
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
        },
    });
};
exports.globalErrorHandler = globalErrorHandler;
