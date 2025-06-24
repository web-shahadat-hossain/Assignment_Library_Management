import { Types } from "mongoose";
import { IBooks } from "../books/books.interface";

export type IBorrow = {
  book: Types.ObjectId | IBooks;
  quantity: number;
  dueDate: Date;
};
