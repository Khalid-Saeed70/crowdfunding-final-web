import Transaction from "../models/transaction.model.js";
import Investment from "../models/investment.model.js";
import Project from "../models/project.model.js";

/**
 * @desc    Create transaction (after payment success)
 * @route   POST /api/transactions
 * @access  Private
 */
export const createTransaction = async (req, res) => {
  try {
    const { investmentId, transactionId, amount, paymentGateway } = req.body;

    if (!investmentId || !transactionId || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const investment = await Investment.findById(investmentId);
    if (!investment) {
      return res.status(404).json({ message: "Investment not found" });
    }

    const transaction = await Transaction.create({
      investmentId,
      transactionId,
      amount,
      paymentGateway: paymentGateway || "Razorpay",
      status: "SUCCESS",
    });

    res.status(201).json({
      success: true,
      message: "Transaction recorded",
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get my transactions (Investor)
 * @route   GET /api/transactions/my
 * @access  Private (Investor)
 */
export const getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate({
        path: "investmentId",
        match: { investorId: req.user.id },
        populate: { path: "projectId", select: "title" },
      })
      .sort({ createdAt: -1 });

    const filtered = transactions.filter((t) => t.investmentId);

    res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get transactions of a project (Admin)
 * @route   GET /api/transactions/project/:projectId
 * @access  Admin
 */
export const getProjectTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate({
        path: "investmentId",
        match: { projectId: req.params.projectId },
        populate: [
          { path: "investorId", select: "name email" },
          { path: "projectId", select: "title" },
        ],
      })
      .sort({ createdAt: -1 });

    const filtered = transactions.filter((t) => t.investmentId);

    res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Refund transaction (Admin)
 * @route   PUT /api/transactions/:id/refund
 * @access  Admin
 */
export const refundTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.status === "REFUND") {
      return res.status(400).json({ message: "Already refunded" });
    }

    // Update transaction
    transaction.status = "REFUND";
    await transaction.save();

    // Update investment
    const investment = await Investment.findById(transaction.investmentId);
    if (investment) {
      investment.status = "REFUNDED";
      await investment.save();

      // Minus amount from project fundedAmount
      const project = await Project.findById(investment.projectId);
      if (project) {
        project.fundedAmount -= investment.amount;
        await project.save();
      }
    }

    res.status(200).json({
      success: true,
      message: "Refund processed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
