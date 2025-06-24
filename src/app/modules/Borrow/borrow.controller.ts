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
const getAllBorrowController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const borrow = await Borrow.aggregate([
      {
        $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } },
      },

      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(201).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: borrow,
    });
  } catch (error: any) {
    next(error);
  }
};

export const borrowController = {
  createBorrowController,
  getAllBorrowController,
};
