const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

let valor = parseFloat(prompt("Digite o valor para conversão:"));
let moedaOrigem = prompt("Digite a moeda de origem(BRL, USD, EUR, GBP):").toUpperCase();
let moedaDestino = prompt("Digite a moeda de destino(BRL, USD, EUR, GBP):").toUpperCase();

let resultado;

switch (moedaOrigem) {
    case "BRL":
        switch (moedaDestino) {
            case "USD":
                resultado = valor / taxaUSD;
                break;
            case "EUR":
                resultado = valor / taxaEUR;
                break;
            case "GBP":
                resultado = valor / taxaGBP;
                break;
            default:
                resultado = valor;
        }
        break;
    case "USD":
        switch (moedaDestino) {
            case "BRL":
                resultado = valor * taxaUSD;
                break;
            case "EUR":
                resultado = valor * (taxaUSD / taxaEUR);
                break;
            case "GBP":
                resultado = valor * (taxaUSD / taxaGBP);
                break;
            default:
                resultado = valor;
        }
        break;
    case "EUR":
        switch (moedaDestino) {
            case "BRL":
                resultado = valor * taxaEUR;
                break;
            case "USD":
                resultado = valor * (taxaEUR / taxaUSD);
                break;
            case "GBP":
                resultado = valor * (taxaEUR / taxaGBP);
                break;
            default:
                resultado = valor;
        }
        break;
    case "GBP":
        switch (moedaDestino) {
            case "BRL":
                resultado = valor * taxaGBP;
                break;
            case "USD":
                resultado = valor * (taxaGBP / taxaUSD);
                break;
            case "EUR":
                resultado = valor * (taxaGBP / taxaEUR);
                break;
            default:
                resultado = valor;
        }
        break;
    default:
        resultado = valor;
}

console.log("O Valor convertido é:", resultado.toFixed(2));
