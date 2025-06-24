"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_router_1 = require("../app/modules/books/books.router");
const borrow_router_1 = require("../app/modules/Borrow/borrow.router");
const modulesRoutes = [
    {
        path: "/books",
        route: books_router_1.booksRouters.router,
    },
    {
        path: "/borrow",
        route: borrow_router_1.borrowRouters.router,
    },
];
exports.default = modulesRoutes;
