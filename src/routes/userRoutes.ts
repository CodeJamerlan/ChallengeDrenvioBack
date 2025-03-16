import { Router } from "express";
import { getUsers, getUser } from "../controllers/userController";

const router = Router();
router.get("/users", getUsers);
router.get('/user/:userId', getUser);

export default router;