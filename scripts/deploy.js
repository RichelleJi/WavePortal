/*
during deployment:
 it creates a bunch of files for you under artifacts

 https://rinkeby.etherscan.io/address/0x3C278A194d3F0071f504c1735Af8eD081062A935

 reference: https://replit.com/@deonb360/waveportal-starter-project-1#src/App.js

  COMMANDS:

  scripts/run.js it's actually

  1. Creating a new local Ethereum network.
  2. Deploying your contract.
  3. Then, when the script ends Hardhat will automatically destroy that local network.

  npx hardhat node
  * keep the local network running

  DEPLOYING LOCAL CONTRACT:
  npx hardhat run scripts/deploy.js --network localhost
*/

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
