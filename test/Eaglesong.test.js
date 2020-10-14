const EaglesongLib = artifacts.require("EaglesongLib.sol");
const TestEaglesong = artifacts.require('TestEaglesong.sol');

contract('TestEaglesong', function (accounts) {
    before(async () => {
        const lib = await EaglesongLib.new();
        TestEaglesong.link(lib);
        contract = await TestEaglesong.new();
    });

    it('test eaglesong hash', async () => {
        let input = Buffer.from('');
        let ret = await contract.eaglesong_hash(input);
        console.log(ret.logs);
        ret = await contract.get.call();
        console.log(ret);
        expect(ret).to.equal("0x9e4452fc7aed93d7240b7b55263792befd1be09252b456401122ba71a56f62a0");
    });
});