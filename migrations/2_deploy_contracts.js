// const SHS = artifacts.require('../contracts/AlethenaShares.sol');
// const DSHS = artifacts.require('../contracts/DraggableAlethenaShares.sol');

// const SHSAddress = '0xBc41F5259E10E36341ff0DA77A5870abc698de56';
// const XCHFAddress = '0xb4272071ecadd69d933adcd19ca99fe80664fc08';
// const offerFeeRecipient = '0x025a554F1B6FfBcB323c916328c55e64f6AD5af7';

// module.exports = function(deployer) {
//   deployer.deploy(DSHS, SHSAddress, XCHFAddress, offerFeeRecipient);
// };


 
const XCHF = artifacts.require('../contracts/Testing/XCHF/CryptoFranc.sol');
const EQUITY = artifacts.require('../contracts/AlethenaShares.sol');
const DragAlongToken = artifacts.require(
  '../contracts/DraggableAlethenaShares.sol'
);

module.exports = function(deployer) {
  deployer
    .deploy(XCHF, 'XCHF', 0)
    .then(() => {
      return deployer.deploy(EQUITY, XCHF.address);
    })
    .then(() => {
      return deployer.deploy(
        DragAlongToken,
        EQUITY.address,
        XCHF.address,
        '0x8dD722E1207FD4156d447c4E3372ffe1Bc8bac91'
      );
    });
};