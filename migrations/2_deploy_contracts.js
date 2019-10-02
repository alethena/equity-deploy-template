// const EQUITY = artifacts.require('../contracts/AlethenaShares.sol');

// module.exports = function(deployer) {
//   deployer.deploy(EQUITY);
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