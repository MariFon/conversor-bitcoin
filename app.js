// function EscreverFrases(texto){
//     console.log(texto)
// }

// EscreverFrases("Tudo sei que nada sei")
// EscreverFrases("Sozinho vou rápido, juntos vamos longe")

function Converter(){

    /** PEGAR O VALOR DO CAMPO */
    let valorEmDolar= document.querySelector("#valor").value
    /** CONVERTER O VALOR DO CAMPO EM NUMERO */
    let valorEmDolarNumerico= parseFloat(valorEmDolar)

    let cotacaoDolar= 5
    let valorEmReal= valorEmDolarNumerico * cotacaoDolar

    /** INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML= "O resultado em real é R$" + valorEmReal.toFixed(2)

    let bitcoin= valorEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML= "O resultado em Bitcoin é" + bitcoin.toFixed (2)
}

