/*
The blockchain = Think of it as a cloud provider, kinda like AWS, but it's owned by no one. It's run by compute power from mining machines all over the world. Usually these people are called miners and we pay them to run our code!
A smart contract = Kinda like our server's code with different functions people can hit.
 public API endpoint :).
*/

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
/*
  wallet address required to deploy to the blockchain,
  getting the wallet address of the owner and randomPerson
*/
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  let totalAddresses;
  totalAddresses = await waveContract.getAllAddresses();
};

/*
This is pretty much the basis of most smart contracts. Read functions. Write functions. And changing a state
variable. We have the building blocks we need now to keep on working on our epic WavePortal.
*/

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