const EaglesongLib = artifacts.require("EaglesongLib");
const TestEaglesong = artifacts.require("TestEaglesong");

module.exports = function(deployer) {
  deployer.deploy(EaglesongLib);
  deployer.link(EaglesongLib, TestEaglesong);
  deployer.deploy(TestEaglesong);
};
