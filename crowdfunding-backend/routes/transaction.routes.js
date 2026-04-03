import express from "express";
import {
  createTransaction,
  getMyTransactions,
  getProjectTransactions,
  refundTransaction,
} from "../controllers/transaction.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", createTransaction);
router.get("/my", getMyTransactions);
router.get("/project/:projectId", getProjectTransactions);
router.put("/:id/refund", refundTransaction);

export default router;
