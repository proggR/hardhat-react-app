task("read-basic", "Calls an BasicContract to read data obtained from chain")
    .addParam("contract", "The address of the API Consumer contract that you want to call")
    .setAction(async taskArgs => {

        const contractAddr = taskArgs.contract
        const networkId = network.name
        console.log("Reading data from BasicContract contract ", contractAddr, " on network ", networkId)
        const BasicContract = await ethers.getContractFactory("BasicContract")

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        //Create connection to API Consumer Contract and call the createRequestTo function
        const basicContract = new ethers.Contract(contractAddr, BasicContract.interface, signer)
        let result = BigInt(await basicContract.volume()).toString()
        console.log('Data is: ', result)
        if (result == 0 && ['hardhat', 'localhost', 'ganache'].indexOf(network.name) == 0) {
            console.log("You'll either need to wait another minute, or fix something!")
        }
        if (['hardhat', 'localhost', 'ganache'].indexOf(network.name) >= 0) {
            console.log("You'll have to manually update the value since you're on a local chain!")
        }
    })

module.exports = {}
