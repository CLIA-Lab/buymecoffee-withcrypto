const ethereumButton = document.querySelector('.connectwallet');
const sendEthButton = document.querySelector('.sendEthButton');



const test = document.querySelector('.test');



let accounts = [];

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
          value: result,
          gasPrice: '21000',
          gas: '21000',
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
/*test.addEventListener('click', () => {
  const testvalue = document.getElementsByClassName('testvalue')[0].value;
  var resultado = Number(testvalue);
  console.log(resultado );
});*/
async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}
