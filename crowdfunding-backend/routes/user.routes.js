import express from "express";
import {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  updateUserRole,
} from "../controllers/user.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/me", getMyProfile);
router.put("/me", updateMyProfile);

router.get("/", getAllUsers);
router.put("/:id/role", updateUserRole);

export default router;
