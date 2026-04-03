// import User from "../models/user.model.js";
// import Project from "../models/project.model.js";
// import Investment from "../models/investment.model.js";

// /**
//  * @desc    Get admin dashboard stats
//  * @route   GET /api/admin/dashboard
//  * @access  Admin
//  */
// export const getDashboardStats = async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalProjects = await Project.countDocuments();
//     const activeProjects = await Project.countDocuments({ status: "ACTIVE" });

//     const totalInvestments = await Investment.aggregate([
//       { $match: { status: "SUCCESS" } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     res.status(200).json({
//       success: true,
//       data: {
//         totalUsers,
//         totalProjects,
//         activeProjects,
//         totalFundRaised: totalInvestments[0]?.total || 0,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Get all projects (Admin)
//  * @route   GET /api/admin/projects
//  * @access  Admin
//  */
// export const getAllProjectsAdmin = async (req, res) => {
//   try {
//     const projects = await Project.find()
//       .populate("creatorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Approve / Reject project
//  * @route   PUT /api/admin/projects/:id/status
//  * @access  Admin
//  */
// export const updateProjectStatus = async (req, res) => {
//   try {
//     const { status } = req.body; // ACTIVE / FAILED

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({ message: "Project not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project status updated",
//       data: project,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Get all users (Admin)
//  * @route   GET /api/admin/users
//  * @access  Admin
//  */
// export const getAllUsersAdmin = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");

//     res.status(200).json({
//       success: true,
//       count: users.length,
//       data: users,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Block / Unblock user
//  * @route   PUT /api/admin/users/:id/block
//  * @access  Admin
//  */
// export const toggleUserBlock = async (req, res) => {
//   try {
//     const { isBlocked } = req.body;

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { isBlocked },
//       { new: true }
//     ).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "User status updated",
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    View full investment details of a project
//  * @route   GET /api/admin/investments/:projectId
//  * @access  Admin
//  */
// export const getProjectInvestmentsAdmin = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       projectId: req.params.projectId,
//     })
//       .populate("investorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: investments.length,
//       data: investments,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import User from "../models/user.model.js";
import Project from "../models/project.model.js";
import Investment from "../models/investment.model.js";

/**
 * @desc    Get admin dashboard stats
 * @route   GET /api/admin/dashboard
 * @access  Admin
 */
export const getDashboardStats = async (req, res) => {
  try {
    // Parallel execution for faster response
    const [
      totalUsers,
      totalProjects,
      activeProjects,
      draftProjects,
      cancelledProjects,
      completedProjects,
      totalInvestments
    ] = await Promise.all([
      User.countDocuments(),
      Project.countDocuments(),
      Project.countDocuments({ status: "ACTIVE" }),
      Project.countDocuments({ status: "DRAFT" }),
      Project.countDocuments({ status: "FAILED" }), // Frontend uses "Cancelled" for FAILED
      Project.countDocuments({ status: "COMPLETED" }),
      Investment.aggregate([
        { $match: { status: "SUCCESS" } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ])
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalProjects,
        activeProjects,
        draftProjects,
        cancelledProjects, // Matches stats.cancelledProjects in frontend
        completedProjects,
        totalFundRaised: totalInvestments[0]?.total || 0,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get all projects (Admin)
 */
export const getAllProjectsAdmin = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("creatorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Approve / Reject project
 */
export const updateProjectStatus = async (req, res) => {
  try {
    const { status } = req.body; 

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: `Project status updated to ${status}`,
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all users (Admin)
 */
export const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Block / Unblock user
 */
export const toggleUserBlock = async (req, res) => {
  try {
    const { isBlocked } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: isBlocked ? "User blocked" : "User unblocked",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    View full investment details
 */
export const getProjectInvestmentsAdmin = async (req, res) => {
  try {
    const investments = await Investment.find({
      projectId: req.params.projectId,
    })
      .populate("investorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: investments.length,
      data: investments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};