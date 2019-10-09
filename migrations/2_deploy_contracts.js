const EQUITY = artifacts.require('../contracts/AlethenaShares.sol');

module.exports = function(deployer) {
  deployer.deploy(EQUITY);
};
