import express from "express";
import { getCategories, createCategory } from "../controllers/category.controller.js";
// 👇 Default import mein curly braces {} nahi lagate
import authMiddleware from "../middlewares/auth.middleware.js"; 

const router = express.Router();

// Sabhi categories dekhne ke liye (Public)
router.get("/", getCategories);

// Category banane ke liye (Sirf logged in users)
// Humne 'protect' ki jagah 'authMiddleware' use kiya hai kyunki wahi export ho raha hai
router.post("/", authMiddleware, createCategory);

export default router;