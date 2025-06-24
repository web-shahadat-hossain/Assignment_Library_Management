import { Schema, model, Model, Document } from "mongoose";
import { IBooks } from "./books.interface";

export interface IBookMethods {
  borrowCopies: (quantity: number) => Promise<IBookDocument>;
}

export type IBookDocument = Document & IBooks & IBookMethods;

const bookSchema = new Schema<IBookDocument>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
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
    description: { type: String, required: true },
    copies: { type: Number, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

bookSchema.methods.borrowCopies = async function (
  quantity: number
): Promise<IBookDocument> {
  if (this.copies < quantity) {
    throw new Error(`Only ${this.copies} copies available`);
  }

  this.copies -= quantity;
  if (this.copies === 0) {
    this.available = false;
  }

  return await this.save();
};

bookSchema.pre("save", function (next) {
  if (this.copies < 0) {
    throw new Error("Copies cannot be negative");
  }
  next();
});

export const Books: Model<IBookDocument> = model<IBookDocument>(
  "Books",
  bookSchema
);
