import express from "express";
import {
  getDashboardStats,
  getAllProjectsAdmin,
  updateProjectStatus,
  getAllUsersAdmin,
  toggleUserBlock,
  getProjectInvestmentsAdmin,
} from "../controllers/admin.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

// Dashboard
router.get("/dashboard", getDashboardStats);

// Projects
router.get("/projects", getAllProjectsAdmin);
router.put("/projects/:id/status", updateProjectStatus);

// Users
router.get("/users", getAllUsersAdmin);
router.put("/users/:id/block", toggleUserBlock);

// Investments
router.get("/investments/:projectId", getProjectInvestmentsAdmin);

export default router;
