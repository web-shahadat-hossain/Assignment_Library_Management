import { model, Schema } from "mongoose";
import { IBooks } from "./books.interface";
import { string } from "zod";

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
    isbn: {
      type: String,
      required: true,
      unique: true,
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
bookSchema.methods.borrowCopies = async function name(quantity: number) {
  if (this.copies < quantity) {
    throw new Error(`Only ${this.copies} copies available`);
  }

  this.copies -= quantity;
  if (this.copies === 0) this.available = false;

  return await this.save();
};

export const Books = model<IBooks>("Books", bookSchema);
