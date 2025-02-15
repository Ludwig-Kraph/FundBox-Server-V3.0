const TokenService = require("../services/tokenService");

exports.generateTokens = async (req, res) => {
  try {
    const { userAddress, amount } = req.body;

    if (!userAddress || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transaction = await TokenService.generateGenTokens(userAddress, amount);

    return res.status(200).json({
      message: "Tokens generated successfully",
      transactionHash: transaction.hash,
    });
  } catch (error) {
    console.error("Error generating tokens:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
