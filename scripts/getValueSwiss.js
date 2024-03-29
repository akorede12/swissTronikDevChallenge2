const { ethers } = require("ethers");

async function getStorageValue() {
  // Replace the following with your actual contract address and provider URL
  const contractAddress = "0x54E38B889F91BFC6d996CA717791db23A0Ad0Cf3";
  const providerUrl = "https://json-rpc.testnet.swisstronik.com/";

  // Connect to the Ethereum node
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // The slot number (0 for the first slot)
  const slotNumber = 0;

  // const number = ethers.Block.number;

  const blockNumber = await provider.getBlockNumber();

  try {
    // Get the storage value at the specified slot
    const storageValue = await provider.getStorage(
      contractAddress,
      slotNumber,
      blockNumber
    );

    console.log(`Value at slot ${slotNumber}: ${storageValue}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

getStorageValue();
