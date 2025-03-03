/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response } from "express";
import { verifyAdmin, verifyUser } from "../middlewares/auth.middleware";

const router = Router({ mergeParams: true });

router.get("/", (Request, Response) => {
  Response.send("Server is running sucessfully");
});
// router.post("/verifyUser", verifyUser);
// router.post("/verifyAdmin", verifyAdmin);
export default router;
