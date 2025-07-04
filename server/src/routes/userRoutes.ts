import { Router } from "express";
import { getUsers, postUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);

// For cognito user and for db user
router.post("/", postUser);

export default router;
