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

const getByIdBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const newBook = await Books.findById(bookId);

    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      data: newBook,
    });
  } catch (error: any) {
    next(error);
  }
};
const updateByIdBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const copies = req.body;
    console.log(copies);
    const newBook = await Books.updateOne(
      { _id: bookId },
      { $set: { ...copies } }
    );

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: newBook,
    });
  } catch (error: any) {
    next(error);
  }
};
const deleteByIdBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;

    await Books.deleteOne({ _id: bookId });

    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    next(error);
  }
};

export const bookController = {
  createBookController,
  getAllBookController,
  getByIdBookController,
  updateByIdBookController,
  deleteByIdBookController,
};
