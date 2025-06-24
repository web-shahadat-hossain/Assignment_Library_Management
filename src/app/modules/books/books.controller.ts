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

const getAllBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "10",
    } = req.query;
    const filterCondition: any = {};
    if (filter) {
      filterCondition.genre = filter;
    }

    const sortCondition: any = { [sortBy as string]: sort === "desc" ? -1 : 1 };

    const books = await Books.find(filterCondition)
      .sort(sortCondition)
      .limit(Number(limit));

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error: any) {
    next(error);
  }
};

export const bookController = {
  createBookController,
  getAllBookController,
};
