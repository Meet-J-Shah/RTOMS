// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router, Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const router = Router({ mergeParams: true });

router.get("/", (Request, Response) => {
  Response.send("Auth Page");
});

router.post("/login", AuthService.login);
router.post("/register", AuthService.register);
export default router;
