// // import express from "express";
// // import {
// //   createProject,
// //   updateProject,
// //   publishProject,
// //   getAllProjects,
// //   getProjectById,
// //   getMyProjects,
// // } from "../controllers/project.controller.js";

// // // import authMiddleware from "../middlewares/auth.middleware.js";
// // // import roleMiddleware from "../middlewares/role.middleware.js";

// // const router = express.Router();

// // // Public
// // router.get("/", getAllProjects);
// // router.get("/:id", getProjectById);

// // // Creator
// // router.post("/", createProject);
// // router.put("/:id", updateProject);
// // router.get("/my/projects", getMyProjects);

// // // Admin
// // router.put("/:id/publish", publishProject);

// // export default router;
// import express from "express";
// import {
//   createProject,
//   updateProject,
//   publishProject,
//   getAllProjects,
//   getProjectById,
//   getMyProjects,
// } from "../controllers/project.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

// const router = express.Router();

// // ✅ PUBLIC
// router.get("/", getAllProjects);

// // ⚠️ IMPORTANT: specific route FIRST
// router.get("/my/projects", authMiddleware, roleMiddleware("CREATOR"), getMyProjects);

// router.get("/:id", getProjectById);

// // ✅ CREATOR
// router.post("/", authMiddleware, roleMiddleware("CREATOR"), createProject);

// router.put("/:id", authMiddleware, roleMiddleware("CREATOR"), updateProject);

// // ✅ ADMIN
// router.put("/:id/publish", authMiddleware, roleMiddleware("ADMIN"), publishProject);

// export default router;
import express from "express";
import {
  createProject,
  updateProject,
  getAllProjects,
  getProjectById,
  getMyProjects,
} from "../controllers/project.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getAllProjects);

// ⚠️ IMPORTANT ORDER
router.get("/my/projects", authMiddleware, roleMiddleware("CREATOR"), getMyProjects);

router.get("/:id", getProjectById);

router.post("/", authMiddleware, roleMiddleware("CREATOR"), createProject);

router.put("/:id", authMiddleware, roleMiddleware("CREATOR"), updateProject);

export default router;