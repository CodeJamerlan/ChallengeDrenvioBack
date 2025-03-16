import { Router } from "express";
import { getProducts, getProductById } from "../controllers/productContoller";

const router = Router();
router.get("/products", getProducts);
router.get('/product/:productId', getProductById);

export default router;