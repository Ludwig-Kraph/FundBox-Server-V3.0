const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with account: ${deployer.address}`);

    // Deploy GenToken
    const GenToken = await ethers.getContractFactory("GenToken");
    const genToken = await GenToken.deploy();
    await genToken.deployed();
    console.log(`GenToken deployed at: ${genToken.address}`);

    // Deploy AutoGen
    const AutoGen = await ethers.getContractFactory("AutoGen");
    const autoGen = await AutoGen.deploy();
    await autoGen.deployed();
    console.log(`AutoGen deployed at: ${autoGen.address}`);

    // Deploy SwapPool
    const SwapPool = await ethers.getContractFactory("SwapPool");
    const swapPool = await SwapPool.deploy(genToken.address, autoGen.address);
    await swapPool.deployed();
    console.log(`SwapPool deployed at: ${swapPool.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
