const SwapService = require("../services/ethService");

exports.swapTokens = async (req, res) => {
  try {
    const { userAddress, genAmount } = req.body;

    if (!userAddress || !genAmount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transaction = await SwapService.swapGenForEth(userAddress, genAmount);

    return res.status(200).json({
      message: "Swap successful",
      transactionHash: transaction.hash,
    });
  } catch (error) {
    console.error("Error swapping tokens:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
