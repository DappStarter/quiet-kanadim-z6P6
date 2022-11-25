require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stove radar ridge clutch harvest hat army gas'; 
let testAccounts = [
"0x0f446209ee33211a273996dfc3860feb1a91c11b365e981982578bd5a0607d21",
"0x0fcc8c0471304d207f878dce95ca5cc639edf807dfdba7c6d0049edfb248fbaf",
"0x115b9ccb66be6eee563ee470ab1a8686d9db5f00cff1e84c6988d17e23836b56",
"0xad01787065e39e6f71536193786ccf2d8ab305f87bb4dc7e76a63c9c3896b554",
"0x3a28e192173fab5c82b62717698a0a9a50c78167bda406e7f14256e9e959032d",
"0x5ee6b5a04efc1d07179b1835b93ebc9cc67219ed93c1cd71a848eb2695a70efa",
"0xaf14ab6cb3fb618397f190cc3ec40457f5213b32367576b2cd565e49e4235b1d",
"0x206a34c3558202fda8c1b271e05f6dc561ee3bd5638d31d01b4f0ee77232bf93",
"0x5f84b1f2b1463a384f35874082e49826fe224ec44e70dd22f8bad7a0283382cd",
"0x87883447b68adb05c271853129760b814fcad1847a0fefb93cbe955579f79fcd"
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

