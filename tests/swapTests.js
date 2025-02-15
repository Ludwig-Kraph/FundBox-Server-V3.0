const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SwapPool Contract", function () {
    let owner, addr1;
    let GenToken, genToken, AutoGen, autoGen, SwapPool, swapPool;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        // Deploy GenToken
        GenToken = await ethers.getContractFactory("GenToken");
        genToken = await GenToken.deploy();
        await genToken.deployed();

        // Deploy AutoGen
        AutoGen = await ethers.getContractFactory("AutoGen");
        autoGen = await AutoGen.deploy();
        await autoGen.deployed();

        // Deploy SwapPool
        SwapPool = await ethers.getContractFactory("SwapPool");
        swapPool = await SwapPool.deploy(genToken.address, autoGen.address);
        await swapPool.deployed();
    });

    it("Should allow swapping GenToken for AutoGen", async function () {
        await genToken.approve(swapPool.address, ethers.utils.parseEther("100"));
        await swapPool.swapGenForAutoGen(ethers.utils.parseEther("100"));

        expect(await autoGen.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should fail swap if balance is insufficient", async function () {
        await expect(swapPool.connect(addr1).swapGenForAutoGen(ethers.utils.parseEther("100")))
            .to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
});
