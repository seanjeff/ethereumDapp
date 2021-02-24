var webProvider;
if (typeof web3 !== 'undefined') {
    webProvider = web3.currentProvider;
    web3 = new Web3(webProvider);
} else {
    webProvider = new Web3.providers.HttpProvider('http://localhost:5285');
    web3 = new Web3(webProvider);
}

var account = web3.eth.getCoinbase();
document.getElementById("myAccount").innerHTML = "my account is :" + JSON.stringify(account);










