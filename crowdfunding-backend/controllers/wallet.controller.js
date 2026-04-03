import Wallet from "../models/wallet.model.js";
import Investment from "../models/investment.model.js";

/**
 * @desc    Get logged-in user's wallet
 * @route   GET /api/wallet
 * @access  Private
 */
export const getMyWallet = async (req, res) => {
  try {
    let wallet = await Wallet.findOne({ userId: req.user.id });

    // Agar wallet nahi hai to create karo
    if (!wallet) {
      wallet = await Wallet.create({
        userId: req.user.id,
        balance: 0,
      });
    }

    res.status(200).json({
      success: true,
      data: wallet,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Credit wallet (Admin / System)
 * @route   POST /api/wallet/credit
 * @access  Admin
 */
export const creditWallet = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({ message: "UserId and amount required" });
    }

    const wallet = await Wallet.findOneAndUpdate(
      { userId },
      { $inc: { balance: amount } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "Wallet credited successfully",
      data: wallet,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Debit wallet (Creator withdraw)
 * @route   POST /api/wallet/debit
 * @access  Creator
 */
export const debitWallet = async (req, res) => {
  try {
    const { amount } = req.body;

    const wallet = await Wallet.findOne({ userId: req.user.id });
    if (!wallet || wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    wallet.balance -= amount;
    await wallet.save();

    res.status(200).json({
      success: true,
      message: "Amount withdrawn successfully",
      balance: wallet.balance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get wallet transactions (Investor investments)
 * @route   GET /api/wallet/history
 * @access  Private
 */
export const getWalletHistory = async (req, res) => {
  try {
    const investments = await Investment.find({
      investorId: req.user.id,
      status: "SUCCESS",
    })
      .populate("projectId", "title")
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
