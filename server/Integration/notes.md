# Tokens y Cryptos
Las Cryptomonedas principales de la Red son las unicas que se tratan con `SendTransaction` etc., todo lo que no sea la moneda principal de su red, `BUSD, USDT` etc. son contratos inteligentes, y hay que llamar a sus metodos por RPC, o una lib que lo haga por ti, como `ethers.js`


# Util para tema cambio de network
```

// The "any" network will allow spontaneous network changes
provider.on("network", (newNetwork, oldNetwork) => {
    // When a Provider makes its initial connection, it emits a "network"
    // event with a null oldNetwork along with the newNetwork. So, if the
    // oldNetwork exists, it represents a changing network
    if (oldNetwork) {
        window.location.reload();
    }
    onChangeCrypto();
});
```