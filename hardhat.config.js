require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const SWISSTRONIK_PRIVATE_KEY = process.env.SWISSTRONIK_PRIVATE_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const ALCHEMY_URL = process.env.ALCHEMY_URL;
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${SWISSTRONIK_PRIVATE_KEY}`], // accounts: [`0x` + `${PRIVATE_KEY}`],
    },
    mumbai: {
      url: ALCHEMY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
};
