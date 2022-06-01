// SPDX-License-Identifier: UNLICENSED

//For now, all you need to know is that a smart contract is a piece of code that lives on the blockchain. The blockchain is a public place where anyone can securely read and write data for a fee. Think of it sorta like AWS or Heroku, except no one actually owns it!

pragma solidity ^0.8.0;

import "hardhat/console.sol"; //version of solidity compiler

contract WavePortal {  //match the file name
    uint256 totalWaves; //state variable: initialized at 0, it's stored permanently in contract storage.
    address[] totalSenderAddresses;

    /*
     * A struct is basically a custom datatype where we can customize what we want to hold inside it.
     */
    struct Wave {
        address saver;
        string message;
        unit256 timestamp;
    }

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        totalSenderAddresses.push(msg.sender);
        console.log("%s has waved!", msg.sender);
        //the wallet address of the caller, gotta connect to a wallet,
        //could customize to retrict to certain wallets
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getAllAddresses() public returns(address) {
        address lastWave;
        if (totalWaves > 0) {
            lastWave = totalSenderAddresses[totalWaves-1];
            console.log("the last wave is from: %s", lastWave);
        }

        return lastWave;


    }
}