// // // import Project from "../models/project.model.js";

// // // /**
// // //  * @desc    Create new project (Creator)
// // //  * @route   POST /api/projects
// // //  * @access  Private (Creator)
// // //  */
// // // export const createProject = async (req, res) => {
// // //   try {
// // //     const {
// // //       title,
// // //       description,
// // //       category,
// // //       targetAmount,
// // //       deadline,
// // //     } = req.body;

// // //     const project = await Project.create({
// // //       creatorId: req.user.id,
// // //       title,
// // //       description,
// // //       category,
// // //       targetAmount,
// // //       deadline,
// // //       status: "DRAFT",
// // //     });

// // //     res.status(201).json({
// // //       success: true,
// // //       message: "Project created (Draft)",
// // //       data: project,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // /**
// // //  * @desc    Update project (Creator)
// // //  * @route   PUT /api/projects/:id
// // //  * @access  Private (Creator)
// // //  */
// // // export const updateProject = async (req, res) => {
// // //   try {
// // //     const project = await Project.findOneAndUpdate(
// // //       { _id: req.params.id, creatorId: req.user.id },
// // //       req.body,
// // //       { new: true, runValidators: true }
// // //     );

// // //     if (!project) {
// // //       return res.status(404).json({ message: "Project not found" });
// // //     }

// // //     res.status(200).json({
// // //       success: true,
// // //       message: "Project updated",
// // //       data: project,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // /**
// // //  * @desc    Publish project (Admin approval)
// // //  * @route   PUT /api/projects/:id/publish
// // //  * @access  Admin
// // //  */
// // // export const publishProject = async (req, res) => {
// // //   try {
// // //     const project = await Project.findByIdAndUpdate(
// // //       req.params.id,
// // //       { status: "ACTIVE" },
// // //       { new: true }
// // //     );

// // //     if (!project) {
// // //       return res.status(404).json({ message: "Project not found" });
// // //     }

// // //     res.status(200).json({
// // //       success: true,
// // //       message: "Project published",
// // //       data: project,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // /**
// // //  * @desc    Get all active projects (Public)
// // //  * @route   GET /api/projects
// // //  * @access  Public
// // //  */
// // // export const getAllProjects = async (req, res) => {
// // //   try {
// // //     const projects = await Project.find({ status: "ACTIVE" })
// // //       .populate("creatorId", "name")
// // //       .sort({ createdAt: -1 });

// // //     res.status(200).json({
// // //       success: true,
// // //       count: projects.length,
// // //       data: projects,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // /**
// // //  * @desc    Get single project details
// // //  * @route   GET /api/projects/:id
// // //  * @access  Public
// // //  */
// // // export const getProjectById = async (req, res) => {
// // //   try {
// // //     const project = await Project.findById(req.params.id)
// // //       .populate("creatorId", "name email");

// // //     if (!project) {
// // //       return res.status(404).json({ message: "Project not found" });
// // //     }

// // //     res.status(200).json({
// // //       success: true,
// // //       data: project,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // /**
// // //  * @desc    Get creator's own projects
// // //  * @route   GET /api/projects/my
// // //  * @access  Private (Creator)
// // //  */
// // // export const getMyProjects = async (req, res) => {
// // //   try {
// // //     const projects = await Project.find({ creatorId: req.user.id })
// // //       .sort({ createdAt: -1 });

// // //     res.status(200).json({
// // //       success: true,
// // //       count: projects.length,
// // //       data: projects,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };
// // import Project from "../models/project.model.js";

// // /**
// //  * @desc    Create new project (Creator)
// //  * @route   POST /api/projects
// //  * @access  Private (Creator)
// //  */
// // export const createProject = async (req, res) => {
// //   try {
// //     const {
// //       title,
// //       description,
// //       category,
// //       targetAmount,
// //       deadline,
// //     } = req.body;

// //     // ✅ Validation
// //     if (!title || !description || !category || !targetAmount || !deadline) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "All fields are required",
// //       });
// //     }

// //     const project = await Project.create({
// //       creatorId: req.user._id, // 🔥 FIXED
// //       title,
// //       description,
// //       category,
// //       targetAmount: Number(targetAmount),
// //       fundedAmount: 0,
// //       deadline,
// //       status: "DRAFT",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Project created successfully",
// //       data: project,
// //     });
// //   } catch (error) {
// //     console.log("CREATE ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // /**
// //  * @desc    Update project (Creator)
// //  * @route   PUT /api/projects/:id
// //  * @access  Private (Creator)
// //  */
// // export const updateProject = async (req, res) => {
// //   try {
// //     const project = await Project.findOneAndUpdate(
// //       { _id: req.params.id, creatorId: req.user._id }, // 🔥 FIXED
// //       req.body,
// //       { new: true, runValidators: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Project not found or unauthorized",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Project updated successfully",
// //       data: project,
// //     });
// //   } catch (error) {
// //     console.log("UPDATE ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // /**
// //  * @desc    Publish project (Admin)
// //  * @route   PUT /api/projects/:id/publish
// //  * @access  Admin
// //  */
// // export const publishProject = async (req, res) => {
// //   try {
// //     const project = await Project.findByIdAndUpdate(
// //       req.params.id,
// //       { status: "ACTIVE" },
// //       { new: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Project not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Project published successfully",
// //       data: project,
// //     });
// //   } catch (error) {
// //     console.log("PUBLISH ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // /**
// //  * @desc    Get all ACTIVE projects (Public)
// //  * @route   GET /api/projects
// //  * @access  Public
// //  */
// // export const getAllProjects = async (req, res) => {
// //   try {
// //     const projects = await Project.find({ status: "ACTIVE" })
// //       .populate("creatorId", "name")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     console.log("GET ALL ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // /**
// //  * @desc    Get single project
// //  * @route   GET /api/projects/:id
// //  * @access  Public
// //  */
// // export const getProjectById = async (req, res) => {
// //   try {
// //     const project = await Project.findById(req.params.id)
// //       .populate("creatorId", "name email");

// //     if (!project) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Project not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: project,
// //     });
// //   } catch (error) {
// //     console.log("GET ONE ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // /**
// //  * @desc    Get my projects (Creator)
// //  * @route   GET /api/projects/my/projects
// //  * @access  Private (Creator)
// //  */
// // export const getMyProjects = async (req, res) => {
// //   try {
// //     const projects = await Project.find({
// //       creatorId: req.user._id, // 🔥 FIXED
// //     }).sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     console.log("MY PROJECTS ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };
// import Project from "../models/project.model.js";

// /**
//  * @desc    Create new project (Creator)
//  * @route   POST /api/projects
//  * @access  Private (Creator)
//  */
// export const createProject = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       category,
//       targetAmount,
//       deadline,
//       phoneNumber, // ✅ added
//       email,
//     } = req.body;

//     // ✅ Validation
//     if (
//       !title ||
//       !description ||
//       !category ||
//       !targetAmount ||
//       !deadline ||
//       !phoneNumber||
//       !email
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // ✅ Optional: phone validation (India format)
//     if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid phone number",
//       });
//     }

//     const project = await Project.create({
//       creatorId: req.user._id, // ✅ fixed
//       title,
//       description,
//       category,
//       targetAmount: Number(targetAmount),
//       fundedAmount: 0,
//       deadline,
//       phoneNumber, // ✅ added
//       email,
//       status: "DRAFT",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Project created successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("CREATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Update project (Creator)
//  * @route   PUT /api/projects/:id
//  * @access  Private (Creator)
//  */
// export const updateProject = async (req, res) => {
//   try {
//     const project = await Project.findOneAndUpdate(
//       {
//         _id: req.params.id,
//         creatorId: req.user._id, // ✅ fixed
//       },
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found or unauthorized",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project updated successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("UPDATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Publish project (Admin)
//  * @route   PUT /api/projects/:id/publish
//  * @access  Admin
//  */
// export const publishProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { status: "ACTIVE" },
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project published successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("PUBLISH ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get all ACTIVE projects (Public)
//  * @route   GET /api/projects
//  * @access  Public
//  */
// export const getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({ status: "ACTIVE" })
//       .populate("creatorId", "name")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     console.log("GET ALL ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get single project
//  * @route   GET /api/projects/:id
//  * @access  Public
//  */
// export const getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id)
//       .populate("creatorId", "name email");

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     console.log("GET ONE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get my projects (Creator)
//  * @route   GET /api/projects/my/projects
//  * @access  Private (Creator)
//  */
// export const getMyProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({
//       creatorId: req.user._id, // ✅ fixed
//     }).sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     console.log("MY PROJECTS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// // import Project from "../models/project.model.js";

// // /**
// //  * @desc    Create new project (Creator)
// //  * @route   POST /api/projects
// //  * @access  Private (Creator)
// //  */
// // export const createProject = async (req, res) => {
// //   try {
// //     const {
// //       title,
// //       description,
// //       category,
// //       targetAmount,
// //       deadline,
// //     } = req.body;

// //     const project = await Project.create({
// //       creatorId: req.user.id,
// //       title,
// //       description,
// //       category,
// //       targetAmount,
// //       deadline,
// //       status: "DRAFT",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Project created (Draft)",
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Update project (Creator)
// //  * @route   PUT /api/projects/:id
// //  * @access  Private (Creator)
// //  */
// // export const updateProject = async (req, res) => {
// //   try {
// //     const project = await Project.findOneAndUpdate(
// //       { _id: req.params.id, creatorId: req.user.id },
// //       req.body,
// //       { new: true, runValidators: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({ message: "Project not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Project updated",
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Publish project (Admin approval)
// //  * @route   PUT /api/projects/:id/publish
// //  * @access  Admin
// //  */
// // export const publishProject = async (req, res) => {
// //   try {
// //     const project = await Project.findByIdAndUpdate(
// //       req.params.id,
// //       { status: "ACTIVE" },
// //       { new: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({ message: "Project not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Project published",
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get all active projects (Public)
// //  * @route   GET /api/projects
// //  * @access  Public
// //  */
// // export const getAllProjects = async (req, res) => {
// //   try {
// //     const projects = await Project.find({ status: "ACTIVE" })
// //       .populate("creatorId", "name")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get single project details
// //  * @route   GET /api/projects/:id
// //  * @access  Public
// //  */
// // export const getProjectById = async (req, res) => {
// //   try {
// //     const project = await Project.findById(req.params.id)
// //       .populate("creatorId", "name email");

// //     if (!project) {
// //       return res.status(404).json({ message: "Project not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get creator's own projects
// //  * @route   GET /api/projects/my
// //  * @access  Private (Creator)
// //  */
// // export const getMyProjects = async (req, res) => {
// //   try {
// //     const projects = await Project.find({ creatorId: req.user.id })
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// import Project from "../models/project.model.js";

// /**
//  * @desc    Create new project (Creator)
//  * @route   POST /api/projects
//  * @access  Private (Creator)
//  */
// export const createProject = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       category,
//       targetAmount,
//       deadline,
//     } = req.body;

//     // ✅ Validation
//     if (!title || !description || !category || !targetAmount || !deadline) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const project = await Project.create({
//       creatorId: req.user._id, // 🔥 FIXED
//       title,
//       description,
//       category,
//       targetAmount: Number(targetAmount),
//       fundedAmount: 0,
//       deadline,
//       status: "DRAFT",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Project created successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("CREATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Update project (Creator)
//  * @route   PUT /api/projects/:id
//  * @access  Private (Creator)
//  */
// export const updateProject = async (req, res) => {
//   try {
//     const project = await Project.findOneAndUpdate(
//       { _id: req.params.id, creatorId: req.user._id }, // 🔥 FIXED
//       req.body,
//       { new: true, runValidators: true }
//     );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found or unauthorized",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project updated successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("UPDATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Publish project (Admin)
//  * @route   PUT /api/projects/:id/publish
//  * @access  Admin
//  */
// export const publishProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { status: "ACTIVE" },
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project published successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log("PUBLISH ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get all ACTIVE projects (Public)
//  * @route   GET /api/projects
//  * @access  Public
//  */
// export const getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({ status: "ACTIVE" })
//       .populate("creatorId", "name")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     console.log("GET ALL ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get single project
//  * @route   GET /api/projects/:id
//  * @access  Public
//  */
// export const getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id)
//       .populate("creatorId", "name email");

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     console.log("GET ONE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get my projects (Creator)
//  * @route   GET /api/projects/my/projects
//  * @access  Private (Creator)
//  */
// export const getMyProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({
//       creatorId: req.user._id, // 🔥 FIXED
//     }).sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     console.log("MY PROJECTS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
import Project from "../models/project.model.js";

/**
 * @desc    Create new project (Creator)
 * @route   POST /api/projects
 * @access  Private (Creator)
 */
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      targetAmount,
      deadline,
      phoneNumber, // ✅ added
      email,
    } = req.body;

    // ✅ Validation
    if (
      !title ||
      !description ||
      !category ||
      !targetAmount ||
      !deadline ||
      !phoneNumber||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Optional: phone validation (India format)
    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }

    const project = await Project.create({
      creatorId: req.user._id, // ✅ fixed
      title,
      description,
      category,
      targetAmount: Number(targetAmount),
      fundedAmount: 0,
      deadline,
      phoneNumber, // ✅ added
      email,
      status: "DRAFT",
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.log("CREATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update project (Creator)
 * @route   PUT /api/projects/:id
 * @access  Private (Creator)
 */
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        creatorId: req.user._id, // ✅ fixed
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found or unauthorized",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Publish project (Admin)
 * @route   PUT /api/projects/:id/publish
 * @access  Admin
 */
export const publishProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status: "ACTIVE" },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project published successfully",
      data: project,
    });
  } catch (error) {
    console.log("PUBLISH ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get all ACTIVE projects (Public)
 * @route   GET /api/projects
 * @access  Public
 */
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: "ACTIVE" })
      .populate("creatorId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.log("GET ALL ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get single project
 * @route   GET /api/projects/:id
 * @access  Public
 */
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("creatorId", "name email");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.log("GET ONE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get my projects (Creator)
 * @route   GET /api/projects/my/projects
 * @access  Private (Creator)
 */
export const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      creatorId: req.user._id, // ✅ fixed
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.log("MY PROJECTS ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};