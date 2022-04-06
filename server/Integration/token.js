
class Token {
   constructor(name, contractAddress, contractAbiFragment, numberOfDecimals) {
      this.name = name;
      this.contractAddress = contractAddress;
      this.contractAbiFragment = contractAbiFragment;
      this.numberOfDecimals = numberOfDecimals;
   }
}

var emptyToken = new Token("Empty", '', '', 0);
var netCrypto = new Token("Net", '', '', 18);
var busdToken = new Token("BUSD", busdContractAddress, busdContractAbiFragment, busdDecimals);
var usdtToken = new Token("USDT", usdtContractAddress, usdtContractAbiFragment, usdtDecimals);
