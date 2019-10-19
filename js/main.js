var abi = JSON.parse('[{"constant": true,"inputs": [],"name": "burnPercent","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "guy","type": "address"},{"internalType": "uint256","name": "wad","type": "uint256"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "src","type": "address"},{"internalType": "address","name": "dst","type": "address"},{"internalType": "uint256","name": "wad","type": "uint256"}],"name": "transferFrom","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "wrapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "whitelistManager","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "withdraw","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "getBurn","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"internalType": "uint8","name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "burnedTokens","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "addSwapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getContractBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "transferWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getTokenBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "dst","type": "address"},{"internalType": "uint256","name": "wad","type": "uint256"}],"name": "transfer","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "addUnswapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "delSwapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "deposit","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "address","name": "","type": "address"}],"name": "allowance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "delTransferWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "delUnswapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "unwrapWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_addr","type": "address"}],"name": "addTransferWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "src","type": "address"},{"indexed": true,"internalType": "address","name": "guy","type": "address"},{"indexed": false,"internalType": "uint256","name": "wad","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "src","type": "address"},{"indexed": true,"internalType": "address","name": "dst","type": "address"},{"indexed": false,"internalType": "uint256","name": "wad","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "dst","type": "address"},{"indexed": false,"internalType": "uint256","name": "wad","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amt","type": "uint256"}],"name": "Deposit","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "src","type": "address"},{"indexed": false,"internalType": "uint256","name": "wad","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amt","type": "uint256"}],"name": "Withdrawal","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "AddSwapWhitelist","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "AddUnswapWhitelist","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "AddTransferWhitelist","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "DelSwapWhitelist","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "DelUnswapWhitelist","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "addr","type": "address"}],"name": "DelTransferWhitelist","type": "event"}]');
//let provider = ethers.getDefaultProvider('ropsten');
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract('0x2e9f0Ff6F6E4b6Af63be3391E449923BA9183a63', abi, provider, signer);

//let tx = await signer.sendTransaction(tx);
//let signature = await signer.signMessage("Hello world");

let contractTokenBalance;
let contractEtherBalance;
let contractTokenPrice;

$(document).ready(async function() {
    getContractStats();

    $("#wrapAmount").keyup(function() {
        let numEther = $("#wrapAmount").val() * ethers.constants.WeiPerEther;
        let numTokens = numEther / contractTokenPrice * ethers.constants.WeiPerEther;

        $("#wrapNumEth").html(numEther / ethers.constants.WeiPerEther);
        $("#wrapNumTokens").html(numTokens / ethers.constants.WeiPerEther * 0.99);
    })

    $("#unwrapAmount").keyup(function() {
        let numTokens = $("#unwrapAmount").val()
        let numEther = numTokens * contractTokenPrice;
        let adjustedTokens = numTokens * ethers.constants.WeiPerEther;

        $("#unwrapNumEth").html(numEther / ethers.constants.WeiPerEther);
        $("#unwrapNumTokens").html(adjustedTokens / ethers.constants.WeiPerEther);
    })

    $("#wrapButton").click(async function() {

        let numEther = $("#wrapAmount").val() * ethers.constants.WeiPerEther;
        
        let transaction = {
            value: numEther,
            gasPrice: (30000 * ethers.constants.WeiPerEther)
        };
        
        let tx = await contract.deposit(transaction);
        let ret = await signer.sendTransaction(tx);

        //contract.deposit(signer);
    })
});


async function getContractStats() {
    contractTokenBalance = await contract.getTokenBalance();
    console.log("contractTokenBalance: "+ contractTokenBalance);
    
    contractEtherBalance = await contract.getContractBalance();
    console.log("contractEtherBalance: "+ contractEtherBalance);

    contractTokenPrice = await contract.getPrice();
    console.log("contractTokenPrice: "+ contractTokenPrice);
    
    setTimeout(getContractStats, 5000);
}


