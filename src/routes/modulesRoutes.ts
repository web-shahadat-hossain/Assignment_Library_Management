import { booksRouters } from "../app/modules/books/books.router";
import { borrowRouters } from "../app/modules/Borrow/borrow.router";

const modulesRoutes = [
  {
    path: "/books",
    route: booksRouters.router,
  },
  {
    path: "/borrow",
    route: borrowRouters.router,
  },
];

export default modulesRoutes;
