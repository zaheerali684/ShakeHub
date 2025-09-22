// Backend/routes/orderRoutes.js
import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

// ✅ Naya order create karega
router.post("/", createOrder);

// ✅ Saare orders dikhayega
router.get("/", getOrders);

export default router;
