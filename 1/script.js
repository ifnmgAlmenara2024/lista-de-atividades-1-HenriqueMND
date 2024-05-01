let peso = parseFloat(prompt("Digite seu peso em Kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

let resultado;

if (imc < 18.5) {
    resultado = "Abaixo do Peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    resultado = "Peso Normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    resultado = "Sobre Peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    resultado = "Obesidade Grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    resultado = "Obesidade Grau II (Severa)";
} else {
    resultado = "Obesidade Grau III (Mórbida)";
}

console.log("Seu IMC é:", imc.toFixed(2));
console.log("Classificação:", resultado);


