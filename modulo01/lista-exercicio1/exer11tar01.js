/*11. Escreva um programa que solicita ao usuário 5 números e calcula a 
soma total utilizando um loop for.*/

const readline = require('readline');

const rl = readline.createInterface({ //Interface entrada/saída
    input: process.stdin,
    output: process.stdout
});

function solicitarNumerosECalcularSoma() {//Funçao solicidar e somar números
    let soma = 0; //Variável para armazenar a soma total
    let contador = 0; //Contador para rastrear o número de entradas

function solicitarNumero() {//Funçao solicitar número
        if (contador < 5) { // Verifica 5 números
            rl.question(`Digite o número ${contador + 1}: `, (input) => {
                let numero = parseFloat(input);// Converte a entrada para um número de ponto flutuante

                if (!isNaN(numero)) {//Verifica se a entrada é um número válido
                    soma += numero; //Adiciona o número à soma total
                    contador++;//Incrementa o contador
                    solicitarNumero();//Solicita o próximo número
                } else {
                    console.log('Digite um número válido.'); // Mensagem de erro para entradas inválidas
                    solicitarNumero(); //Solicita novamente o número
                }
            });
        } else {
        
            console.log(`A soma total dos números é: ${soma}`);//Exibir soma total
            rl.close(); // Fecha a interface de leitura
        }
    }

    solicitarNumero(); // Inicia o processo de solicitação de números
}

solicitarNumerosECalcularSoma();//Chama funçao iniciar programa
