// BUSD Token
var busdContractAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; 
var busdDecimals = 18
var busdContractAbiFragment = [
   {
      "name":"transfer",
      "type":"function",
      "inputs":   [
         {
            "name":"_to",
            "type":"address"
         },
         {
            "name":"_value",
            "type":"uint256"}
      ],
      "constant" : false,
      "outputs":[{"name":"","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
   },
   {
      "name":"balanceOf",
      "constant":true,
      "inputs":   [
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "outputs":[{"name":"","type":"uint256"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   }
];
//---------------------------

// USDT Token
var usdtContractAddress = "0x55d398326f99059fF775485246999027B3197955"; 
// var usdtContractAddress = "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd"; // USDT(BSC-Testnet)
var usdtDecimals = 18
let usdtContractAbiFragment = [
   {
      "name":"transfer",
      "constant":false,
      "inputs":   [
         {
            "internalType":"address",
            "name":"recipient",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "outputs":[{"internalType":"bool","name":"","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "name":"balanceOf",
      "constant":true,
      "inputs":   [
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "outputs":  [
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   }
]

//---------------------------


