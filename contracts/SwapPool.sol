// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GenToken.sol";
import "./AutoGen.sol";

contract SwapPool {
    address public owner;
    GenToken public genToken;
    AutoGen public autoGenToken;
    uint256 public genToEthRate = 10; // 10 GEN = 1 ETH

    constructor(address _genToken, address _autoGenToken) {
        owner = msg.sender;
        genToken = GenToken(_genToken);
        autoGenToken = AutoGen(_autoGenToken);
    }

    function swapGenForEth(uint256 genAmount) external {
        require(genAmount > 0, "Invalid amount");

        uint256 ethAmount = genAmount / genToEthRate;
        genToken.transferFrom(msg.sender, address(this), genAmount);
        payable(msg.sender).transfer(ethAmount);
    }

    function swapAutoGenForEth(uint256 autoGenAmount) external {
        require(autoGenAmount > 0, "Invalid amount");

        uint256 ethAmount = autoGenAmount / genToEthRate;
        autoGenToken.transferFrom(msg.sender, address(this), autoGenAmount);
        payable(msg.sender).transfer(ethAmount);
    }

    receive() external payable {}
}
