const SkrillService = require("../services/skrillService");
const EthService = require("../services/ethService");

exports.transferFunds = async (req, res) => {
  try {
    const { destination, amount, type } = req.body;

    if (!destination || !amount || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let transaction;
    if (type === "skrill") {
      transaction = await SkrillService.sendToSkrill(destination, amount);
    } else if (type === "eth") {
      transaction = await EthService.sendToWallet(destination, amount);
    } else {
      return res.status(400).json({ error: "Invalid transfer type" });
    }

    return res.status(200).json({
      message: "Transfer successful",
      transactionHash: transaction.hash,
    });
  } catch (error) {
    console.error("Error transferring funds:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
