import { booksRouters } from "../app/modules/books/books.router";

const modulesRoutes = [
  {
    path: "/books",
    route: booksRouters.router,
  },
];

export default modulesRoutes;
