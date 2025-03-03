import { Request, Response, NextFunction } from "express";
import { isCelebrateError } from "celebrate";
import CONSTANTS from "../constants/constant";
import { BaseError } from "../utils";

interface ErrorHandler {
  (error: unknown, req: Request, res: Response, next: NextFunction): void;
}
function cleanString(inputString: string): string {
  // Remove backslashes and quotes using regular expressions
  return inputString.replace(/\\|"/g, "");
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorCatcher: ErrorHandler = (err, req, res, next) => {
  console.log((err as Error).stack);

  if (isCelebrateError(err)) {
    // eslint-disable-next-line prefer-const
    let errorMessage: string = CONSTANTS.ERROR_MESSAGES.VALIDATION_ERROR;

    // way 1

    for (const [, joiError] of err.details.entries()) {
      errorMessage = joiError.details
        .map((detail: { message: string }) => detail.message)
        .join(", ");
    }
    errorMessage = cleanString(errorMessage);
    //way 1 ends
    // //  Way 2 --> without using for loop...
    // // console.log("M");
    // // console.log(err);
    // const error1 = err;
    // if (error1 && error1.details && error1.details.has("body")) {
    //   const bodyErrors = error1.details.get("body");
    //   console.log(bodyErrors.details[0].message);
    //   errorMessage = cleanString(bodyErrors.details[0].message);
    // } else if (error1 && error1.details && error1.details.has("params")) {
    //   const paramErrors = error1.details.get("params");
    //   console.log(paramErrors.details[0].message);
    //   errorMessage = cleanString(paramErrors.details[0].message);
    // } else {
    //   console.log("Error message not found.");
    // }
    // // way 2 ends here
    return res.status(CONSTANTS.RESPONSE_CODES.BAD_REQUEST).json({
      error: CONSTANTS.ERROR_MESSAGES.VALIDATION_ERROR,
      message: errorMessage,
    });
  }

  if (err instanceof BaseError) {
    return res
      .status(err.code || CONSTANTS.RESPONSE_CODES.INTERNAL_SERVER_ERROR)
      .json({
        error: err.name,
        message: err.message,
      });
  }

  console.log("default error");
  return res.status(CONSTANTS.RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
    error: CONSTANTS.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
    message: CONSTANTS.ERROR_MESSAGES.SERVER_ERROR,
  });
};

export default errorCatcher;
