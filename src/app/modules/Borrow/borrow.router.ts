import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { borrowValidation } from "./borrow.validation";
import { borrowController } from "./borrow.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(borrowValidation),
  borrowController.createBorrowController
);

export const borrowRouters = {
  router,
};
