/*8. Escreva um algoritmo para ler 2 valores (considere que não serão 
lidos valores iguais)e escreve-los em ordem crescente.*/


function ordenarValores(valor1, valor2) { //Funçao ordenar valor em ordem crescente
    if (valor1 < valor2) {
        console.log("Ordem crescente: " + valor1 + ", " + valor2);
    } else {
        console.log("Ordem crescente: " + valor2 + ", " + valor1);
    }
}

let valor1 =100
let valor2 = 101


if (valor1 !== valor2) {// valores diferentes
    ordenarValores(valor1, valor2);
} else {
    console.log("Os valores não podem ser iguais.");
}
