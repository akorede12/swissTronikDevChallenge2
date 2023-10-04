SwissTronik Developer challenge 2:

Create a smart contract with a single private state variable (string or uint) and develop functions to modify and retrieve this value Deploy the contract to the Mumbai testnet and Swisstronik testnet, and write a script to access this variable using the RPC method eth_getStorageAt() on both networks.

The Contract address of the Deployed address on Mumbai and Swisstronik should be documented
in the Read.me file of the GitHub Repo.

Requirements:
Develop a smart contract with the following characteristics:
A single private state variable (you can choose between a number or a string) X
A function to set this variable with a new value that differs from the default value X
A public function to return the current value of the state variable X
Deploy the smart contract to the Mumbai testnet and the Swisstronik testnet X
Write a script that performs the following tasks for both networks:
Retrieves the value of the state variable (slot#0) from the deployed smart contract using the eth_getStorageAt() RPC method
(Here is a guideline on how to deploy on the Swisstronik testnet)

SwissTronik Testnet Contract Address:
"0x54E38B889F91BFC6d996CA717791db23A0Ad0Cf3"

Mumbau Testnet Contract Address:
"0x25A8f321Cc95b944fcA168C5d34CC6b6A2c8b2b4"

scripts are located in the scripts folder

`npx hardhat run scripts/getValueSwiss.js` to run the swisstronik script

`npx hardhat run scripts/getValueMumbai.js` to run the Mumbai script
