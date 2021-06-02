require('dotenv').config();
const { ethers } = require("ethers");

const { abi } = require('../artifacts/contracts/RandomEmitter.sol/RandomEmitter.json');

// Set up wallet.
const privateKey = process.env.TEST_PRIVATE_KEY;
const alchemyEndpoint = process.env.ALCHEMY_ENDPOINT;

const provider = new ethers.providers.JsonRpcProvider(alchemyEndpoint, 'rinkeby');
const wallet = new ethers.Wallet(privateKey, provider)

// Get Pack contract
const contractAddress = '0x21e232d1fA22048c3015826d00d1c252599Bd9eb';
const randomEmitter = new ethers.Contract(contractAddress, abi, wallet);

async function main() {
  const randomNumberRequest = await randomEmitter.requestRandomNumber({ gasLimit: 1000000 });
  await randomNumberRequest.wait()

  console.log('Random number request tx hash: ', randomNumberRequest.hash); 
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });