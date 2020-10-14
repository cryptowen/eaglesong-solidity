pragma solidity >=0.5.10;

import { EaglesongLib } from "../contracts/EaglesongLib.sol";

contract TestEaglesong {

    function hash(bytes memory data) public returns (bytes memory) {
        return EaglesongLib.EaglesongHash(data);
    }
}

