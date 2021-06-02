# Chainlink VRF test contract

The `RandomEmitter.sol` contract uses [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf/) to request and receive provably random numbers.

The `deploy.js` script is a deployment script. The `fund.js` script funds the deployed `RandomEmitter.sol` contract with LINK tokens to pay the fees for random number requests. The `random.js` script requests a new random number from the Chainlink VRF system.

`RandomEmitter.sol` rinkeby address -- [0x21e232d1fA22048c3015826d00d1c252599Bd9eb](https://rinkeby.etherscan.io/address/0x21e232d1fA22048c3015826d00d1c252599Bd9eb) 