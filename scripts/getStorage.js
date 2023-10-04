const { ethers } = require("ethers");
const { JsonRpcProvider } = require("@ethersproject/providers");

const contractAddress = "0x54E38B889F91BFC6d996CA717791db23A0Ad0Cf3";
const slotNumber = 0;

const providerUrl = "https://json-rpc.testnet.swisstronik.com/"; // Update with your Ethereum node URL
const provider = new ethers.JsonRpcProvider(providerUrl);

async function getStorageValue() {
  try {
    const blockNumber = "latest";
    const storageValue = await provider.getStorageAt(
      contractAddress,
      slotNumber,
      blockNumber
    );

    console.log("Storage Value:", storageValue);
  } catch (error) {
    console.error("Error:", error);
  }
}

getStorageValue();
