import express from "express";
import {
  getMyWallet,
  creditWallet,
  debitWallet,
  getWalletHistory,
} from "../controllers/wallet.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getMyWallet);
router.get("/history", getWalletHistory);
router.post("/credit", creditWallet);
router.post("/debit", debitWallet);

export default router;
