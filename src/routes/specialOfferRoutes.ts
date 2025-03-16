import { Router } from "express";
import { addSpecialOffer, getSpecialOffers, getSpecialOffersByUser } from "../controllers/specialOfferController";

const router = Router();
router.post("/specialOffer", addSpecialOffer);
router.get("/specialOffers", getSpecialOffers);
router.get("/specialOffers/:userId", getSpecialOffersByUser);

export default router;