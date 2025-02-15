const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const sendETH = async (to, amount) => {
    try {
        const tx = await wallet.sendTransaction({
            to,
            value: ethers.parseEther(amount.toString()),
        });

        await tx.wait();
        console.log(`Transaction successful: ${tx.hash}`);
        return tx.hash;
    } catch (error) {
        console.error("ETH transfer failed:", error);
        throw error;
    }
};

module.exports = { sendETH };
