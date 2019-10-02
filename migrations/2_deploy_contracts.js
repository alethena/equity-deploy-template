const SHS = artifacts.require('../contracts/ServiceHunterShares.sol');
const DSHS = artifacts.require('../contracts/DraggableServiceHunterShares.sol');

const SHSAddress = '0xBc41F5259E10E36341ff0DA77A5870abc698de56';
const XCHFAddress = '0xb4272071ecadd69d933adcd19ca99fe80664fc08';
const offerFeeRecipient = '0x025a554F1B6FfBcB323c916328c55e64f6AD5af7';

module.exports = function(deployer) {
  deployer.deploy(DSHS, SHSAddress, XCHFAddress, offerFeeRecipient);
};
