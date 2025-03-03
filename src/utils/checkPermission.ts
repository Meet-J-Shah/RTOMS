import { NextFunction, Response, Request } from "express";
import { hasAccess } from "../middlewares/permission.middleware";

export const checkPermission = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    hasAccess(req, res, next, permission);
  };
};
