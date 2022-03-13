const ethereumButton = document.querySelector('.connectwallet');
const sendEthButton = document.querySelector('.sendEthButton');
const showAccount = document.querySelector('#exampleModalLabel');
const showChainId = document.querySelector('#ChainId');




let accounts = [];
let chain;

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  
  const mountvalue = document.getElementById('mountValue').value;
  const number_mountvalue = Number(mountvalue);
  var result = ether2wei(number_mountvalue);

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0xe1EAA2cdFdf124dBB23A48C2cAB7e04a85e098D4',
          value: result
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

function ether2wei(ammount) {
  val = ammount * 10 ** 18;
  return val.toString(16);
}

ethereumButton.addEventListener('click', () => {
  getAccount();
});
async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  var accountString = String(account);
  var address = `Address: ${accountString.slice(0,5)} ... ${accountString.slice(accountString.length -4)}`;
  showAccount.innerHTML = address;
  chain = await ethereum.request({ method: 'eth_chainId' });
   if(chain != '0x61'){
    showChainId.innerHTML = 'Pliss connect to BSC network';
    mountvalue.sty
   }else{
    showChainId.innerHTML = 'Amount to send:';
   }
}
