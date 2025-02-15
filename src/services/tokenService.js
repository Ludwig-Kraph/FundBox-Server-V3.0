const { ethers } = require("ethers");
const TokenABI = require("../contracts/TokenABI.json");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const tokenContract = new ethers.Contract(
    process.env.GEN_TOKEN_ADDRESS,
    TokenABI,
    wallet
);

const generateTokens = async (recipient, amount) => {
    try {
        const tx = await tokenContract.mint(recipient, ethers.parseUnits(amount.toString(), 18));
        await tx.wait();
        console.log(`Tokens generated successfully: ${tx.hash}`);
        return tx.hash;
    } catch (error) {
        console.error("Token generation failed:", error);
        throw error;
    }
};

const swapTokensForETH = async (amount) => {
    try {
        const tx = await tokenContract.swap(ethers.parseUnits(amount.toString(), 18));
        await tx.wait();
        console.log(`Swap successful: ${tx.hash}`);
        return tx.hash;
    } catch (error) {
        console.error("Token swap failed:", error);
        throw error;
    }
};

module.exports = { generateTokens, swapTokensForETH };
