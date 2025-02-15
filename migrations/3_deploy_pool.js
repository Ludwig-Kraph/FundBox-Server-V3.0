const SwapPool = artifacts.require("SwapPool");
const GenToken = artifacts.require("GenToken");
const AutoGen = artifacts.require("AutoGen");

module.exports = async function (deployer) {
  const genToken = await GenToken.deployed();
  const autoGen = await AutoGen.deployed();

  await deployer.deploy(SwapPool, genToken.address, autoGen.address);
  const swapPool = await SwapPool.deployed();

  console.log("SwapPool deployed at:", swapPool.address);
};
