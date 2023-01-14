require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain column harvest photo fresh gift'; 
let testAccounts = [
"0x1e46cb80257d0b2592256b8463efc3de1106b241d5f5348d274487123aacf82a",
"0xb86d17bd50b86ff04ec63df6bc67496e56a1c9cf79d1d1631eded19c1b6f75dd",
"0x8af607cecd41344d36db56db2005eea870a30d4a9df1436c42993283ca16b797",
"0x3eaef316ae18810415ab0fb42868c86e77a36cdfb433b9752385758e9846eff0",
"0x278c6a2911fd2f21de578aa9844a98a2e6eea7e42dbf10fbd80d82bd8bd40981",
"0xa6b41afb5efddd135e471cdb72573f0844913f1b974c8201afbe587b0a2c24dd",
"0x084847c590771baeea4cc37549ef9111df039b62a748ead6f940c0485af7f654",
"0x23307edbd4f9465a1b406e66f62b485188a603097fe31a03dfebddf4e8d12bce",
"0x56ec5e042fa272ab66f6a97fea09e6dcf8418bfae76c072ddfa7d9f3c8cd2fe4",
"0xbfa913b826aa74df3b8123aa69a1ad9562c4b09d63a83a43e9d9be179d71c3d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

