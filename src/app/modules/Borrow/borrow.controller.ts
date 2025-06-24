import { NextFunction, Request, Response } from "express";
import { Books } from "../books/books.model";
import { Borrow, borrowSchema } from "./borrow.model";

const createBorrowController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { book, quantity, dueDate } = req.body;

    const foundBook = await Books.findById(book);
    if (!foundBook) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    await foundBook.borrowCopies(quantity);

    const borrow = await Borrow.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error: any) {
    next(error);
  }
};

export const borrowController = {
  createBorrowController,
};
