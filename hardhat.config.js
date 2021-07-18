/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("@nomiclabs/hardhat-ethers");
 require("hardhat-deploy-ethers");
 require("hardhat-deploy");
 require("@symfoni/hardhat-react");
 require("hardhat-typechain");
 require("@typechain/ethers-v5");


 require('dotenv').config()


 const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
 const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
 const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
 const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
 const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
 // optional
 const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key"


module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "kovan",
      networks: {
          hardhat: {
              // // If you want to do some forking, uncomment this
              // forking: {
              //   url: MAINNET_RPC_URL
              // }
          },
          localhost: {
          },
          kovan: {
              url: KOVAN_RPC_URL,
              accounts: [PRIVATE_KEY],
              // accounts: {
              //     mnemonic: MNEMONIC,
              // },
              saveDeployments: true,
          },
          rinkeby: {
              url: RINKEBY_RPC_URL,
              // accounts: [PRIVATE_KEY],
              accounts: {
                  mnemonic: MNEMONIC,
              },
              saveDeployments: true,
          },
          ganache: {
              url: 'http://localhost:8545',
              accounts: {
                  mnemonic: MNEMONIC,
              }
          }
      },
      etherscan: {
          // Your API key for Etherscan
          // Obtain one at https://etherscan.io/
          apiKey: ETHERSCAN_API_KEY
      },
      namedAccounts: {
          deployer: {
              default: 0, // here this will by default take the first account as deployer
              1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
          },
          feeCollector: {
              default: 1
          }
      },
      typechain: {
        outDir: "frontend/src/hardhat/tcmodels",
        target: "ethers-v5",
        runOnCompile: true
      },
      // react: {
      //    "providerOptions": {
      //     "walletconnect": {
      //       "options": {
      //         "infuraId": "c229331f1d044c8f95e03f54b0ea2f26",
      //       },
      //     },
      //   },
      //
      // },
      solidity: {
          compilers: [
              {
                  version: "0.7.3"
              },
              {
                  version: "0.6.6"
              },
              {
                  version: "0.4.24"
              }
          ]
      },
      mocha: {
          timeout: 100000
      }
};
