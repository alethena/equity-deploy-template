const XCHFAddress = '0xb4272071ecadd69d933adcd19ca99fe80664fc08'; // CHANGE THIS
const offerFeeRecipient = '0x025a554F1B6FfBcB323c916328c55e64f6AD5af7';

const EQUITY = artifacts.require('../contracts/AlethenaShares.sol');
const DragAlongToken = artifacts.require(
  '../contracts/DraggableAlethenaShares.sol'
);

module.exports = function(deployer) {
  deployer.deploy(EQUITY).then(() => {
    return deployer.deploy(
      DragAlongToken,
      EQUITY.address,
      XCHFAddress,
      offerFeeRecipient
    );
  });
};
