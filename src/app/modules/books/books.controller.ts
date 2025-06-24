import { NextFunction, Request, Response } from "express";
import { Books } from "./books.model";

const createBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookData = req.body;
    const newBook = await Books.create(bookData);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error: any) {
    next(error);
  }
};

export const bookController = {
  createBookController,
};
