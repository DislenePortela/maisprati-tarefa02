/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na 
tela 10 vezes.*/

const readline = require('readline');

const rl = readline.createInterface({//Interface entrada/saída dados
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número inteiro: ', (input) => {//Solicita um númro
    
    let numero = parseInt(input);//Converte para número inteiro


    if (isNaN(numero)) {//Entrada é um número válido
        console.log('Por favor, insira um número inteiro válido.');
    } else {
        // Exibe o número 10x
        for (let i = 0; i < 10; i++) {
            console.log(numero);
        }
    }

    rl.close();
});
