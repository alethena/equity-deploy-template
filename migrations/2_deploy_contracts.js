
const XCHFAddress = '0x84286f1e0aaa59787131da691b5d5cfc2aff289a'; // CHANGE THIS
const offerFeeRecipient = '0x025a554F1B6FfBcB323c916328c55e64f6AD5af7';

const EQUITY = artifacts.require('../contracts/AlethenaShares.sol');
const DragAlongToken = artifacts.require(
  '../contracts/DraggableAlethenaShares.sol'
);

module.exports = function(deployer) {
  deployer
  .deploy(EQUITY)
    .then(() => {
      return deployer.deploy(
        DragAlongToken,
        EQUITY.address,
        XCHFAddress,
        offerFeeRecipient
      );
    });
};