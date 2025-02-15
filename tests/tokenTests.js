const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contracts", function () {
    let owner, addr1, addr2;
    let GenToken, genToken, AutoGen, autoGen;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        // Deploy GenToken
        GenToken = await ethers.getContractFactory("GenToken");
        genToken = await GenToken.deploy();
        await genToken.deployed();

        // Deploy AutoGen
        AutoGen = await ethers.getContractFactory("AutoGen");
        autoGen = await AutoGen.deploy();
        await autoGen.deployed();
    });

    it("Should assign total supply to owner", async function () {
        const ownerBalance = await genToken.balanceOf(owner.address);
        expect(await genToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Should allow token transfers", async function () {
        await genToken.transfer(addr1.address, ethers.utils.parseEther("100"));
        expect(await genToken.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should fail if sender doesn't have enough balance", async function () {
        await expect(genToken.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("1000")))
            .to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
});
