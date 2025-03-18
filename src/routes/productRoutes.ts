import { Router } from "express";
import { getProducts, getProductsById } from "../controllers/productContoller";

const router = Router();
router.get("/products/:userId", getProductsById);
router.get("/products", getProducts);

export default router;