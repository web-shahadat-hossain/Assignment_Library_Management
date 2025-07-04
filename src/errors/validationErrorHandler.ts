import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interface/common";
import { IGenericErrorMessage } from "../interface/errors";

export const validationErrorHandler = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (element) => {
      return {
        path: element?.path,
        message: element?.message,
      };
    }
  );
  return {
    statusCode: 500,
    message: "Validation Error",
    errorMessages: errors,
  };
};
