const GenToken = artifacts.require("GenToken");
const AutoGen = artifacts.require("AutoGen");

module.exports = async function (deployer) {
  await deployer.deploy(GenToken);
  const genToken = await GenToken.deployed();

  await deployer.deploy(AutoGen);
  const autoGen = await AutoGen.deployed();

  console.log("GenToken deployed at:", genToken.address);
  console.log("AutoGen deployed at:", autoGen.address);
};
