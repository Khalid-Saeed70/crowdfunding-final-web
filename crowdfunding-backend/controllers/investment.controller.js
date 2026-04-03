// import Investment from "../models/investment.model.js";
// import Project from "../models/project.model.js";

// /**
//  * @desc    Create new investment
//  * @route   POST /api/investments
//  * @access  Private (Investor)
//  */
// export const createInvestment = async (req, res) => {
//   try {
//     const { projectId, amount, visibility } = req.body;

//     if (!projectId || !amount) {
//       return res.status(400).json({ message: "Project and amount required" });
//     }

//     const project = await Project.findById(projectId);
//     if (!project || project.status !== "ACTIVE") {
//       return res.status(400).json({ message: "Project not available" });
//     }

//     // Create investment
//     const investment = await Investment.create({
//       projectId,
//       investorId: req.user.id,
//       amount,
//       visibility: visibility || "PUBLIC_NAME_ONLY",
//     });

//     // Update project funded amount
//     project.fundedAmount += amount;
//     await project.save();

//     res.status(201).json({
//       success: true,
//       message: "Investment successful",
//       data: {
//         investmentId: investment._id,
//         amount: investment.amount,
//         visibility: investment.visibility,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Get investments of logged-in investor
//  * @route   GET /api/investments/my
//  * @access  Private (Investor)
//  */
// export const getMyInvestments = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       investorId: req.user.id,
//     })
//       .populate("projectId", "title targetAmount fundedAmount")
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

// /**
//  * @desc    Get public investments of a project
//  *          (Show investor name, hide amount)
//  * @route   GET /api/investments/project/:projectId
//  * @access  Public
//  */
// export const getProjectPublicInvestments = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       projectId: req.params.projectId,
//       status: "SUCCESS",
//     })
//       .populate("investorId", "name")
//       .select("investorId visibility createdAt");

//     const publicData = investments.map((inv) => ({
//       investorName:
//         inv.visibility === "ANONYMOUS"
//           ? "Anonymous Investor"
//           : inv.investorId?.name,
//       invested: true,
//       date: inv.createdAt,
//     }));

//     res.status(200).json({
//       success: true,
//       data: publicData,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Admin / Creator view full investment data
//  * @route   GET /api/investments/admin/:projectId
//  * @access  Admin / Creator
//  */
// export const getProjectFullInvestments = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       projectId: req.params.projectId,
//     })
//       .populate("investorId", "name email")
//       .select("investorId amount visibility status createdAt");

//     res.status(200).json({
//       success: true,
//       data: investments,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import Investment from "../models/investment.model.js";
import Project from "../models/project.model.js";

// ✅ CREATE
export const createInvestment = async (req, res) => {
  try {
    const { projectId, amount, visibility } = req.body;

    if (!projectId || !amount) {
      return res.status(400).json({
        success: false,
        message: "Project and amount required",
      });
    }

    const project = await Project.findById(projectId);

    if (!project || project.status !== "ACTIVE") {
      return res.status(400).json({
        success: false,
        message: "Project not available",
      });
    }

    const investAmount = Number(amount);

    const investment = await Investment.create({
      projectId,
      investorId: req.user._id,
      amount: investAmount,
      visibility: visibility || "PUBLIC_NAME_ONLY",
      status: "SUCCESS",
    });

    await Project.findByIdAndUpdate(projectId, {
      $inc: { fundedAmount: investAmount },
    });

    res.status(201).json({
      success: true,
      data: investment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ MY INVESTMENTS
export const getMyInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({
      investorId: req.user._id,
    })
      .populate("projectId", "title targetAmount fundedAmount")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: investments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ PUBLIC
export const getProjectPublicInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({
      projectId: req.params.projectId,
      status: "SUCCESS",
    })
      .populate("investorId", "name")
      .select("investorId visibility createdAt");

    const publicData = investments.map((inv) => ({
      investorName:
        inv.visibility === "ANONYMOUS"
          ? "Anonymous Investor"
          : inv.investorId?.name,
      invested: true,
      date: inv.createdAt,
    }));

    res.status(200).json({
      success: true,
      data: publicData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADMIN
export const getProjectFullInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({
      projectId: req.params.projectId,
    })
      .populate("investorId", "name email")
      .select("investorId amount visibility status createdAt");

    res.status(200).json({
      success: true,
      data: investments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};