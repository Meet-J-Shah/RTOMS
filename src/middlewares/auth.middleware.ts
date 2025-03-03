/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "../utils/successResponse.handler";
import CONSTANTS from "../constants/constant";
import { InternalError, NotFoundError } from "../utils";
import jwt from "jsonwebtoken";

import { User } from "../models";
export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;

    // console.log(token.split(" ")[0]);
    // console.log(token.split(" ")[1]);
    if (token.split(" ")[0] !== "Bearer") {
      throw new NotFoundError(
        CONSTANTS.RESPONSE_CODES.NOT_FOUND,
        CONSTANTS.ERROR_MESSAGES.USER_ERRORS.USER_EXISTS
      );
    } else {
      const t2 = token.split(" ")[1];
      //   console.log(t2);
      await jwt.verify(t2, "meet shah", async (err: any, decoded: any) => {
        if (err) {
          console.log("error>>", err);
          throw err;
        } else {
          const id = decoded.id;
          const user = await User.findByPk(id);
          if (!user) {
            throw new NotFoundError(
              CONSTANTS.RESPONSE_CODES.NOT_FOUND,
              CONSTANTS.ERROR_MESSAGES.USER_ERRORS.USER_EXISTS
            );
          } else {
            if (decoded.role == "user") {
              res.send("user is verified");
              return;
            } else {
              res.send("Your role is not user");
              return;
            }
          }
          //   console.log(decoded.role);
        }
      });

      //   if (decryptData.iat < decryptData.exp) {
      //     console.log("meet");
      //   }
    }
  } catch (error: any) {
    next(error);
    return;
  }
};

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;

    // console.log(token.split(" ")[0]);
    // console.log(token.split(" ")[1]);
    if (token.split(" ")[0] !== "Bearer") {
      throw new NotFoundError(
        CONSTANTS.RESPONSE_CODES.NOT_FOUND,
        CONSTANTS.ERROR_MESSAGES.USER_ERRORS.USER_EXISTS
      );
    } else {
      const t2 = token.split(" ")[1];
      //   console.log(t2);
      await jwt.verify(t2, "meet shah", async (err: any, decoded: any) => {
        if (err) {
          console.log("error>>", err);
          throw err;
        } else {
          const id = decoded.id;
          const user = await User.findByPk(id);
          if (!user) {
            throw new NotFoundError(
              CONSTANTS.RESPONSE_CODES.NOT_FOUND,
              CONSTANTS.ERROR_MESSAGES.USER_ERRORS.USER_EXISTS
            );
          } else {
            if (decoded.role == "admin") {
              res.send("admin is verified");
              return;
            } else {
              res.send("Your role is not asmin");
              return;
            }
          }
          //   console.log(decoded.role);
        }
      });

      //   if (decryptData.iat < decryptData.exp) {
      //     console.log("meet");
      //   }
    }
  } catch (error: any) {
    next(error);
    return;
  }
};
