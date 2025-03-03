// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router, Request, Response } from "express";
import auth from "./auth.route";
import order from "./order.route";
const router = Router({ mergeParams: true });

router.get("/", (Request, Response) => {
  Response.send("Server is running sucessfully");
});
router.use("/auth", auth);
router.use("/order", order);
export default router;
