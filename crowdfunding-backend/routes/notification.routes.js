import express from "express";
import {
  getMyNotifications,
  createNotification,
  markAsRead,
  markAllAsRead,
} from "../controllers/notification.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getMyNotifications);
router.post("/", createNotification);
router.put("/:id/read", markAsRead);
router.put("/read-all", markAllAsRead);

export default router;
