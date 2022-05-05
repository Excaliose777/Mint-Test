const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { METADATA_URL } = require("../constants");

async function main() {
  const metadataURL = METADATA_URL;

  const testMintContract = await ethers.getContractFactory("TestMint");

  const deployedTestMintContract = await testMintContract.deploy(
    metadataURL,
  );

  console.log(
    "Test Mint Contract Address:",
    deployedTestMintContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });