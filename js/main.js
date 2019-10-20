var abi = JSON.parse('[{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addSwapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addTransferWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addUnswapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"delSwapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"delTransferWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"delUnswapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"AddSwapWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"AddUnswapWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"AddTransferWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"DelSwapWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"DelUnswapWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"}],"name":"DelTransferWhitelist","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getEthForTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getTokensForEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"transferWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unwrapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whitelistManager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wrapWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]');
var address = '0xa1Be6c4ca2CCaBa2498219d04EF7004863D89D3c';
var web3 = new Web3(Web3.givenProvider || "ws://ropsten.infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
var contract = new web3.eth.Contract(abi, address);

console.log
let ethereumEnabled = false;
let walletAddress;
let walletEther;
let walletTokens;

let contractTokenBalance;
let contractEtherBalance;
let contractTokenPrice;

$(document).ready(async function() {
    getContractStats();

    $("#wrapAmount").keyup(function() {
        updateWrapPrice();
    })

    $("#unwrapAmount").keyup(function() {
        updateUnwrapPrice();
    });
});

function updateWrapPrice() {
    let numEther = $("#wrapAmount").val() * 1e18;
    let numTokens = numEther / contractTokenPrice * 1e18;

    $("#wrapNumEth").html((numEther / 1e18).toFixed(3));
    $("#wrapNumTokens").html((numTokens / 1e18 * 0.99).toFixed(3));
}

function updateUnwrapPrice() {
    let numTokens = $("#unwrapAmount").val() * 1e18; // 1000000000000000000
    let totalEther = numTokens * contractTokenPrice * 0.99;
    let unwrapEther = totalEther / 1e18; 
    
    let numEther;
    if(numTokens >= contractTokenBalance) {
        numEther = contractEtherBalance;
    } else {
        numEther = unwrapEther;
    }

    $("#unwrapNumEth").html((numEther / 1e18).toFixed(3));
    $("#unwrapNumTokens").html((numTokens / 1e18).toFixed(3));
}

$("#enableEthereum").click(function(e){
    ethereum.enable().then ( (x) => {
        ethereumEnabled = true;
        $("#enableEthereumBox").hide();
        $(".eth-enabled").show();
        walletAddress = `${x[0]}`;
        console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
    } );
    e.preventDefault();
});


$("#unwrapButton").click(async function(e) {
    if(ethereumEnabled) {
         unwrapAmount =  web3.utils.toWei($("#unwrapAmount").val(), 'ether');
        console.log(unwrapAmount);
        tx = await contract.methods.withdraw(unwrapAmount).send({from: walletAddress});
    } else {
        ethereum.enable().then ( (x) => {
            ethereumEnabled = true;
            $("#enableEthereumBox").hide();
            $("#unwrapButton").html("Unwrap");
            $("#wrapButton").html("Wrap");

            walletAddress = `${x[0]}`;
            console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
        } );
    }
    e.preventDefault();
});

$("#wrapButton").click(async function(e) {
    if(ethereumEnabled) {
        wrapAmount =  web3.utils.toWei($("#wrapAmount").val(), 'ether');
        console.log(wrapAmount);
        tx = await contract.methods.deposit().send({from: walletAddress, value: wrapAmount});
    } else {
        ethereum.enable().then ( (x) => {
            ethereumEnabled = true;
            $("#enableEthereumBox").hide();
            $("#wrapButton").html("Wrap");
            $("#unwrapButton").html("Unwrap");

            walletAddress = `${x[0]}`;
            console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
        } );
    }
    e.preventDefault();
});



$("#myEtherBalance").click(async function(e) {
    $("#wrapAmount").val(walletEther / 1e18);
    updateWrapPrice();
    e.preventDefault();
});


$("#myTokenBalance").click(async function(e) {
   $("#unwrapAmount").val(walletTokens / 1e18);
    updateUnwrapPrice();
    e.preventDefault();
});


async function getContractStats() {
    contractEtherBalance = await contract.methods.getContractBalance().call();
    //console.log("contractEtherBalance: "+ contractEtherBalance);
    contractTokenBalance = await contract.methods.getTokenBalance().call();
    // console.log("contractTokenBalance: "+ contractTokenBalance);
    contractTokenPrice = await contract.methods.getTokenPrice().call();
    // console.log("contractTokenPrice: "+ contractTokenPrice);

    if(ethereumEnabled) {
        walletTokens = await contract.methods.balanceOf(walletAddress).call();
        walletEther = await web3.eth.getBalance(walletAddress);

        $("#myTokenBalance").html((walletTokens / 1e18).toFixed(3));
        $("#myEtherBalance").html((walletEther / 1e18).toFixed(3));
    }

    $("#contractTokenBalance").html((contractTokenBalance / 1e18).toFixed(3));
    $("#contractEtherBalance").html((contractEtherBalance / 1e18).toFixed(3));
    $("#contractBurnBalance").html(((contractEtherBalance - contractTokenBalance) / 1e18).toFixed(3));
    $("#contractPrice").html((contractTokenPrice / 1e18).toFixed(3));

    setTimeout(getContractStats, 5000);
}
