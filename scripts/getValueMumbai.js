const { ethers } = require("hardhat");
require("dotenv").config({ path: "../.env" });

const ALCHEMY_URL = process.env.ALCHEMY_URL;

async function getStorageValue() {
  // Replace the following with your actual contract address and provider URL
  const contractAddress = "0x25A8f321Cc95b944fcA168C5d34CC6b6A2c8b2b4";
  const providerUrl = ALCHEMY_URL;

  // Connect to the Ethereum node
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  // The slot number (0 for the first slot)
  const slotNumber = 0;

  try {
    // Get the storage value at the specified slot
    const storageValue = await provider.send("eth_getStorageAt", [
      contractAddress,
      slotNumber,
    ]);
    console.log(`Value at slot ${slotNumber}: ${storageValue}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

getStorageValue();
