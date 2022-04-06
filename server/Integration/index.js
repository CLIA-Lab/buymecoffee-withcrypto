const ethereumButton = document.querySelector('.connectwallet');
const sendEthButton = document.querySelector('.sendEthButton');
const showAccount = document.querySelector('#exampleModalLabel');
const showChainId = document.querySelector('#ChainId');


let chainDict = { 'Eth Mainnet': 1, 'Ropsten': 3, 'Rinkeby': 4, 'Bsc Mainnet': 56, 'Bsc Testnet': 97 };
let cryptoToChainDict = { 'ETH': 'Eth Mainnet', 'BNB': 'Bsc Mainnet', 'BUSD': 'Bsc Mainnet', 'USDT': 'Bsc Mainnet'};
let cryptoTextDict = { 'ETH': 'ETH (ERC20)', 'BNB': 'BNB (BEP20)', 'BUSD': 'BUSD (BEP20)', 'USDT': 'USDT (BEP20)'};
let cryptoTokenDict = { 'NONE': emptyToken, 'ETH': netCrypto, 'BNB': netCrypto, 'BUSD': busdToken, 'USDT': usdtToken};


let selectedCrypto = 'NONE';

function getChainId(crypto) {
  return '0x' + chainDict[crypto].toString(16);
}

//This is what changes the Cypto Select Dropdown into an image and a text of the selected Crypto
function changeCrypto(crypto) {
  let imgHtml = '<img height="30" width="30" src="https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/' + crypto + '.svg">';

  const selectBtn = document.getElementById('dropdownCryptoBtn');
  selectBtn.innerHTML = imgHtml + ' ' + cryptoTextDict[crypto];
  selectedCrypto = crypto;

  onChangeCrypto();
}


let accounts = [];

// Converts ether to wei
function ether2wei(ammount) {
  val = ammount * 10 ** 18;
  return val.toString(16);
}

ethereumButton.addEventListener('click', () => {
  getAccount();
});

let currentChain;
let provider;
let signer;

// Connect to Metamask and get address
async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  const account = accounts[0];
  var accountString = String(account);
  
  var address = `${accountString.slice(0,5)} ... ${accountString.slice(accountString.length -4)}`;
  showAccount.innerHTML = address;
  
  // get the provider and signer for dealing with Metamask
  provider = new  ethers.providers.Web3Provider(window.ethereum, 'any');
  signer = provider.getSigner();

  onChangeCrypto();
}

// This changes visual coponents of the modal depending on the selected Crypto
async function onChangeCrypto() {
  currentChain = await ethereum.request({ method: 'eth_chainId' });

  const amountInput = document.getElementById('amountInput');
  const sendBtn = document.getElementById('sendBtn');
  // disabling input and send button
  amountInput.disabled = true
  sendBtn.disabled = true

  if(selectedCrypto == 'NONE')
    showChainId.innerHTML = 'Please Select a cryptocurrency';
  else if(NotInRightChain()) {
    showChainId.innerHTML = 'Please connect to ' + cryptoToChainDict[selectedCrypto] + ' network';
  } 
  else {
    showChainId.innerHTML = 'Amount of ' + selectedCrypto + ' to Send:';
    // enabling input and send button
    amountInput.disabled = false
    sendBtn.disabled = false
  }

  // Show the balance of the selected Crypto
  showBalance(cryptoTokenDict[selectedCrypto]);
}

function NotInRightChain() {
  return currentChain != chainDict[cryptoToChainDict[selectedCrypto]];
}

// Show the balance that have the user of the given crypto, in the modal
let currentBalance;
async function showBalance(token){
  var label = document.getElementById('balanceLabel');
  label.innerText = '';

  if (token == emptyToken || NotInRightChain()) { // Not Selected Yet or Wrong Chain
    return;
  }
  var userAddress = await signer.getAddress();
  var balance;
  var cryptoName;
  if (token == netCrypto) { // Crypto is the Network Main Crypto
    balance = await provider.getBalance(userAddress);
    cryptoName = selectedCrypto;
  }
  else { // Crypto is a Network Token
    var contract = new ethers.Contract(token.contractAddress, token.contractAbiFragment, signer);
    balance = await contract.balanceOf(userAddress);
    cryptoName = token.name;
  }
  var balanceFormatted = ethers.utils.formatUnits(balance, token.numberOfDecimals);
  var balanceString = String(balanceFormatted).slice(0,7);
  
  label.innerText ="Balance " + balanceString + " " + cryptoName;

  // CurrentBalance Calculated
  var balanceParsed = ethers.utils.parseUnits(balanceFormatted, token.numberOfDecimals);
  currentBalance = ethers.BigNumber.from(balanceParsed);
}

// detect Network account change
window.ethereum.on('chainChanged', function(networkId){
  onChangeCrypto();
  console.log('chainChanged',networkId);
});
