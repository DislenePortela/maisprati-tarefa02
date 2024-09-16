/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/


function calcularIMC(peso, altura) { //funçao calcular IMC
    return peso / (altura * altura);
}

function determinarCategoria(imc) { //Funçao determinar categoria de peso
    if (imc < 17) {
        return "Baixo peso";
    } else if (imc >= 17 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
let peso = 40 // em quilogramas
let altura = 1.75; // em metros

let imc = calcularIMC(peso, altura);
console.log("Seu IMC é: " + imc.toFixed(2));

let categoria = determinarCategoria(imc);
console.log("Categoria de peso: " + categoria);
