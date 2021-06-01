// Chainlink info for Rinkeby

const vrfCoordinator = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const linkTokenAddress = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const keyHash = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory("RandomEmitter");
  const randomEmitter = await Factory.deploy(vrfCoordinator, linkTokenAddress, keyHash);

  console.log("Random Emitter address:", randomEmitter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// Random Emitter address -- 0x21e232d1fA22048c3015826d00d1c252599Bd9eb