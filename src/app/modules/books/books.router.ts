import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { booksValidation } from "./books.validation";
import { bookController } from "./books.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(booksValidation),
  bookController.createBookController
);

export const booksRouters = {
  router,
};
