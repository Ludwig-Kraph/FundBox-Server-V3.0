// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AutoGen is ERC20 {
    address public swapPool;

    constructor() ERC20("AutoGenToken", "AGEN") {
        swapPool = msg.sender;
        _mint(msg.sender, 500000 * 10 ** decimals()); // Initial Supply
    }

    function mintForSwap(address to, uint256 amount) external {
        require(msg.sender == swapPool, "Only Swap Pool can mint");
        _mint(to, amount);
    }
}
