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
      page = "1",
      limit = "12",
      searchTerm = "",
      sortBy = "createdAt",
      sortOrder = "desc",
      genre = "",
    } = req.query;

    const filterCondition: any = {};

    if (genre) {
      filterCondition.genre = genre;
    }

    if (searchTerm) {
      filterCondition.$or = [
        { title: { $regex: searchTerm, $options: "i" } },
        { author: { $regex: searchTerm, $options: "i" } },
      ];
    }

    const sortCondition: any = {
      [sortBy as string]: sortOrder === "desc" ? -1 : 1,
    };

    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);
    const skip = (pageNumber - 1) * limitNumber;

    const total = await Books.countDocuments(filterCondition);

    const books = await Books.find(filterCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      meta: {
        page: pageNumber,
        limit: limitNumber,
        total,
        totalPages: Math.ceil(total / limitNumber),
      },
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
    const { copies, ...rest } = req.body;

    const available = copies > 0;

    const newBook = await Books.updateOne(
      { _id: bookId },
      {
        $set: {
          copies,
          available,
          ...rest,
        },
      }
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
