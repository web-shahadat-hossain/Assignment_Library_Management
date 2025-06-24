import { model, Schema } from "mongoose";
import { IBooks } from "./books.interface";

const bookSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    copies: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Books = model<IBooks>("Books", bookSchema);
