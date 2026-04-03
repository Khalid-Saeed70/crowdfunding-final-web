import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import investmentRoutes from "./routes/investment.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import walletRoutes from "./routes/wallet.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import categoryRoutes from "./routes/category.routes.js";


import rateLimitMiddleware from "./middlewares/rateLimit.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// -------------------- Middlewares --------------------
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Global rate limit
app.use(rateLimitMiddleware);

// -------------------- Routes --------------------
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);           


// -------------------- Health Check --------------------
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Crowdfunding API is running 🚀",
  });
});

// -------------------- Error Middleware --------------------
app.use(errorMiddleware);

export default app;
