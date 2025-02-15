// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GenToken is ERC20 {
    address public owner;

    constructor() ERC20("GenToken", "GEN") {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Initial Supply
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == owner, "Only owner can mint");
        _mint(to, amount);
    }
}
