import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { booksValidation } from "./books.validation";

const router = express.Router();

router.post("/", validateRequest(booksValidation));

export const booksRouters = {
  router,
};
