const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    
    const genToken = await ethers.getContractAt("GenToken", process.env.GEN_TOKEN_ADDRESS);
    const autoGen = await ethers.getContractAt("AutoGen", process.env.AUTO_GEN_TOKEN_ADDRESS);
    const swapPool = await ethers.getContractAt("SwapPool", process.env.SWAP_POOL_ADDRESS);

    const fundAmount = ethers.utils.parseEther("1000");

    console.log("Approving and funding liquidity pool...");

    await genToken.approve(swapPool.address, fundAmount);
    await autoGen.approve(swapPool.address, fundAmount);
    
    await swapPool.addLiquidity(fundAmount, fundAmount);
    
    console.log("Liquidity added successfully.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
