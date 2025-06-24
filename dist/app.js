"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// application router
app.use("/api/", routes_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        error: {
            name: "NotFoundError",
            path: req.originalUrl,
            method: req.method,
        },
    });
});
app.get("/", (req, res) => {
    res.send("Server is running!");
});
exports.default = app;
