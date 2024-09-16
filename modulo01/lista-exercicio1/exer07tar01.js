/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/


function calcularValorTotal(numeroDeMacas) { //Funçao calcular valor
    let precoPorMaca;
    
    if (numeroDeMacas < 12) {
        precoPorMaca = 0.30; // Preço abaixo de uma dúzia
    } else {
        precoPorMaca = 0.25; // Preço uma dúzia ou mais
    }
    
    return numeroDeMacas * precoPorMaca;
}

let numeroDeMacas = 6 //Quantidade de maças

let valorTotal = calcularValorTotal(numeroDeMacas);
console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));
