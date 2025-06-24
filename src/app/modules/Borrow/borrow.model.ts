import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

export const borrowSchema = new Schema<IBorrow>({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
  },
});

export const Borrow = model<IBorrow>("borrow", borrowSchema);
