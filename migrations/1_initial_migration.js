const SharingPool = artifacts.require("SharingPool");
const ARTXToken = artifacts.require("ARTXToken");


// Deploy a mock ARTX for testing 

module.exports = async function (deployer) {

  // await deployer.deploy(ARTXToken);
  // const artxAddress = '0x9E9f808fcFe29E90FD208fB2E7F71c49a95D91c9';
  await deployer.deploy(SharingPool,'0x6A30458929f8a300E9C1B4C11df195d32A79D644');
};



// npx truffle-flattener ./contracts/SharingPool.sol > ./contracts/Flat.sol
// ARTX:  0x6a30458929f8a300e9c1b4c11df195d32a79d644
// 6.12 single no license