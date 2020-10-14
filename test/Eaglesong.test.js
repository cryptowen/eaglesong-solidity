const TestEaglesong = artifacts.require('TestEaglesong.sol');

contract('TestEaglesong', function (accounts) {
    let contract;
    before(async () => {
        contract = await TestEaglesong.new();
    });

    it('test eaglesong hash', async () => {
        let input = Buffer.from('hello');
        let ret = await contract.hash.call(input);
        assert.equal(ret, '0xcb38467495f1dfc219f6eb9c6a5fa54e01a6019a661e07a1eaeaf3784b12a6d1', 'hash mismatch');
        let gas = await contract.hash.estimateGas(input);
        console.log('Gas usage', gas);
    });
});