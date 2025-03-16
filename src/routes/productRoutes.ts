import { Router } from "express";
import { getProducts } from "../controllers/productContoller";

const router = Router();
router.get("/products", getProducts);

export default router;