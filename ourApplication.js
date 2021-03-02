
function connectNode() {
    var option = document.querySelector("#ethereumNode").val();
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:5285'));

    }

    showInfo();
}

async function showInfo() {
    var account = await web3.eth.getCoinbase();
    var balance = await web3.eth.getBalance(account);
    document.querySelector("#myAccount").innerHTML = "my account is: " + account;
    document.querySelector("#myBalance").innerHTML = "my account balance is: " + web3.utils.fromWei(balance, "ether") + "ether";
}





















