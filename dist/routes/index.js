"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const modulesRoutes_1 = __importDefault(require("./modulesRoutes"));
const routes = express_1.default.Router();
modulesRoutes_1.default.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
