// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

const EaglesongLib = artifacts.require("EaglesongLib");
const TestEaglesong = artifacts.require("TestEaglesong");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);

  deployer.deploy(EaglesongLib);
  deployer.link(EaglesongLib, TestEaglesong);
  deployer.deploy(TestEaglesong);
};
