
let targetAddress = document.getElementById('targetAddress').value;

// let amount = '0.01';

// Create a transaction request of the selected crypto
async function send(){
  let amountVal = document.getElementById('amountInput').value;
  
  var token = cryptoTokenDict[selectedCrypto];
  var amountParsed = ethers.utils.parseUnits(amountVal, token.numberOfDecimals);

  // var amountBig = ethers.BigNumber.from(amountParsed);
  
  if (amountParsed.gt(currentBalance)) { // Insufficient Balance
    var insufLabel = document.getElementById('insufLabel');
    insufLabel.innerText = 'Insufficient Balance';
    await delay(2000);
    insufLabel.innerText = '';
    return;
  }
  // Suficient Balance
  if (token == netCrypto) { // Crypto is the Network Main Crypto
    sendCrypto(amountVal, targetAddress);
  }
  else { // Crypto is a Network Token
    sendToken(token, amountVal, targetAddress);
  }
}

// Send the Network Crypto
async function sendCrypto(amount, targetAddress){
    const  transactionResponse = await  signer.sendTransaction({
    to:  targetAddress,
    value:  ethers.utils.parseEther(amount.toString())
  });

  console.log({transactionResponse});
}
// Send a Network Token
async function sendToken(token, amountVal, targetAddress){

    try {
      var contract = new ethers.Contract(token.contractAddress, token.contractAbiFragment, signer);

      // How many tokens?
      var amountParsed = ethers.utils.parseUnits(amountVal, token.numberOfDecimals);
      // Send tokens
      const transactionResponse = contract.transfer(targetAddress, amountParsed).then(function(tx) {
          console.log(tx);
      })
    } catch (error) {
      console.log({error});
    }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}