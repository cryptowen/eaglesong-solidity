// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import { EaglesongLib } from "./EaglesongLib.sol";

contract TestEaglesong {
    bytes hash;

    event DEBUG(bytes data);

    function eaglesong_hash(bytes memory data) public {
        hash = EaglesongLib.EaglesongHash(data);
        emit DEBUG(hash);
    }

    function get() public view returns(bytes memory) {
        return hash;
    }
}

