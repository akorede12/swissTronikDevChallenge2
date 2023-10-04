pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

/*
Create a smart contract with a single private state variable (string or uint) and 
develop functions to modify and retrieve this value. Deploy the contract to the Mumbai testnet 
and Swisstronik testnet, and write a script to access this variable 
using the RPC method eth_getStorageAt() on both networks. 
The Contract address of the Deployed address on Mumbai and Swisstronik should be documented 
in the Read.me file of the GitHub Repo.

Requirements:
Develop a smart contract with the following characteristics:
A single private state variable (you can choose between a number or a string)
A function to set this variable with a new value that differs from the default value
A public function to return the current value of the state variable
Deploy the smart contract to the Mumbai testnet and the Swisstronik testnet
Write a script that performs the following tasks for both networks:
Retrieves the value of the state variable (slot#0) from the deployed smart contract using the eth_getStorageAt() RPC method
(Here is a guideline on how to deploy on the Swisstronik testnet)
*/

contract SwisstronikBounty {
    string private stateVariable = "jiggy";

    function modifyJiggy(string memory input) public {
        stateVariable = input;
    }

    function retrieveJiggy() public view returns (string memory) {
        return stateVariable;
    }
}
