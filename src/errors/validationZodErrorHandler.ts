import { ZodError, ZodIssue } from "zod";
import { IGenericErrorMessage } from "../interface/errors";

export const validationZodErrorHandler = (error: ZodError) => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessages: errors,
  };
};
