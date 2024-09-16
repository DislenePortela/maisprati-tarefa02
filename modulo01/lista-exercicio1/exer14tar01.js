/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const readline = require('readline');

const rl = readline.createInterface({//Interface entrada/saída
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite um número para calcular o fatorial: ', (input) => {
    let numero = parseInt(input);//Convertepara um número inteiro

       if (!isNaN(numero) && numero >= 0) {//Entrada número positivo
        let fatorial = 1; //Inicializa o fatorial como 1

        for (let i = 1; i <= numero; i++) { //Loop para calcular o fatorial
            fatorial *= i; //Multiplica o valor atual do fatorial por i
        }

        console.log(`O fatorial de ${numero} é: ${fatorial}`);
    } else {
        console.log(`Digite um número positivo.`); //Mensagem de erro
    }

    rl.close();//Fecha a interface
});
