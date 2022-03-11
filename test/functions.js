var msgDiv = document.getElementById('msg_id');
var connDiv = document.getElementById('connDiv');
var sendDiv = document.getElementById('sendDiv');

// var connBtn = document.getElementById('conn_btn');  
var connBtn = document.getElementById('connBtn');   
var sendBtn = document.getElementById('send_btn');
var currentAccount = null;

 // it's cleaner if the dest address is taken directly from the form
async function send() {
    var destAddress = document.getElementById('recipient-name').value;
    var amount = document.getElementById('ammountInput').value;
    // convert amount to wei
    amountWei = ether2wei(amount);  

    const txHash = await ethereum.request({ // @todo check if all went good
        method: 'eth_sendTransaction',
        params: [{
            to: destAddress,
            from: ethereum.selectedAddress,
            value: amountWei
        }]
    });
}

// ammount: ej:'0.01' -> '0x2386f26fc10000'
function ether2wei(ammount) {
    val = ammount * 10 ** 18;
    return val.toString(16);
}

// connDiv is visible only when the user is not connected with metamask wallet
// sendDiv is collapsed when the user is not connected with metamask wallet
function setDivsVisib(){
    if(ethereum.selectedAddress == null){
        connDiv.style.display = 'block';
        sendDiv.style.display = 'none';
    }else{
        connDiv.style.display = 'none';
        sendDiv.style.display = 'block';
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
        // connBtn.style.visibility = 'visible';

    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        sendDiv.style.display = 'block';
    }
}

function connect() {
    connBtn.style.visibility = 'hidden';

    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');  // @todo show this message 

            } else {
                console.error(err);  // @todo show this message in the UI
            }
            // connDiv.style.visibility = 'visible';
            connBtn.style.visibility = 'visible';
        });
    handleAccountsChanged();
}

