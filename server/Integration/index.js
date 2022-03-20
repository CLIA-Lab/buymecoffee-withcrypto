const ethereumButton = document.querySelector('.connectwallet');
const sendEthButton = document.querySelector('.sendEthButton');
const showAccount = document.querySelector('#exampleModalLabel');
const showChainId = document.querySelector('#ChainId');


let chainDict = { 'Eth Mainnet': 1, 'Ropsten': 3, 'Rinkeby': 4, 'Bsc Mainnet': 56 };
let cryptoToChainDict = { 'ETH': 'Eth Mainnet', 'BNB': 'Bsc Mainnet', 'BUSD': 'Bsc Mainnet', 'USDT': 'Bsc Mainnet'};
let cryptoTextDict = { 'ETH': 'ETH (ERC20)', 'BNB': 'BNB (BEP20)', 'BUSD': 'BUSD (BEP20)', 'USDT': 'USDT (BEP20)'};


let selectedCrypto = 'NONE';

function getChainId(crypto) {
  return '0x' + chainDict[crypto].toString(16);
}

function changeCrypto(crypto) {
  let imgHtml = '<img height="30" width="30" src="https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/' + crypto + '.svg">';

  const selectBtn = document.getElementById('dropdownCryptoBtn');
  selectBtn.innerHTML = imgHtml + ' ' + cryptoTextDict[crypto];
  selectedCrypto = crypto;

  onChangeCrypto();
}


let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  // destinyAddress = document.getElementById('destinyAddress').value;
  destinyAddress = '0xe1EAA2cdFdf124dBB23A48C2cAB7e04a85e098D4';

  var amount = document.getElementById('amountInput').value;
  amountWei = ether2wei(amount);  // convert amount to wei

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: destinyAddress,
          value: amountWei
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

//Sending Ethereum to an address From STACKOVERFLOW
// sendEthButton.addEventListener('click', () => {

// const web3 = Web3('https://bsc-dataseed1.binance.org:443');
// const contractAddress = '0x08ba0619b1e7a582e0bce5bbe9843322c954c340';
// const reciever = '0x6B5e6761A9fa07573aD01aeEBc0B724bD3a2980a';

// sendEthButton.addEventListener('click', () => {
//     (async ()=>{
//         const contract = new web3.eth.Contract(ABI, contractAddress);
//         const transfer = await contract.methods.transfer(reciever, 10);
//         const encodedABI = await transfer.encodeABI();
//         if(window.ethereum.chainId == '0x38'){
//             ethereum
//             .request({
//             method: 'eth_sendTransaction',
//             params: [
//                 {
//                     from: ethereum.selectedAddress,
//                     to: reciever,
//                     gasPrice: '',
//                     gas: '',
//                     data: encodedABI
//                 },
//             ],
//             })
//             .then((txHash) => console.log(txHash))
//             .catch((error) => console.error);
//         } else {
//             ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]})
//         }
//     })()
// });

function ether2wei(ammount) {
  val = ammount * 10 ** 18;
  return val.toString(16);
}

ethereumButton.addEventListener('click', () => {
  getAccount();
});

let currentChain;

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  var accountString = String(account);

  var address = `${accountString.slice(0,5)} ... ${accountString.slice(accountString.length -4)}`;
  showAccount.innerHTML = address;

  onChangeCrypto();
}

async function onChangeCrypto() {
  currentChain = await ethereum.request({ method: 'eth_chainId' });

  const amountInput = document.getElementById('amountInput');
  const sendBtn = document.getElementById('sendBtn');
  // disabling input and send button
  amountInput.disabled = true
  sendBtn.disabled = true

  if(selectedCrypto == 'NONE')
    showChainId.innerHTML = 'Please Select a cryptocurrency';
  else if(currentChain != chainDict[cryptoToChainDict[selectedCrypto]]) {
    showChainId.innerHTML = 'Please connect to ' + cryptoToChainDict[selectedCrypto] + ' network';
  } 
  else {
    showChainId.innerHTML = 'Amount of ' + selectedCrypto + ' to Send:';
    // enabling input and send button
    amountInput.disabled = false
    sendBtn.disabled = false
  }
}

// detect Network account change
window.ethereum.on('networkChanged', function(networkId){
  onChangeCrypto();
  console.log('networkChanged',networkId);
});
