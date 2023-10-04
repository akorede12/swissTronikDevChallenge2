const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // contract deployment
  const swissTronik = await hre.ethers.deployContract("SwisstronikBounty");
  await swissTronik.waitForDeployment();
  console.log("swissTronik deployed to:", swissTronik.target);

  fs.writeFileSync(
    "./config.js",
    `
  export const swissTronikContract = "${swissTronik.target}"
  `
  );
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
