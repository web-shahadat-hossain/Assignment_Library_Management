import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";
import { validationZodErrorHandler } from "../errors/validationZodErrorHandler";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof ZodError) {
    const formattedError = validationZodErrorHandler(err);
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: "ZodError",
        errors: formattedError.errorMessages,
      },
    });
    return;
  }

  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: "Validation failed",
      success: err,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: err?.message || "Internal Server Error",
    error: {
      name: err?.name || "Error",
      message: err?.message || "Something went wrong",
    },
  });
};
