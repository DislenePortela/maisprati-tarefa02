/*12. Crie um programa que exibe a tabuada de um número fornecido pelo 
usuário (de 1 a 10) utilizando um loop for.*/

const readline = require('readline');

const rl = readline.createInterface({//Interface entrada/saída
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para ver a tabuada: ', (input) => {//Solicitaçao de um número
    let numero = parseInt(input); //Converte para um número inteiro

    
    if (!isNaN(numero)) {//Verifica se é um número válido
        console.log(`Tabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) { //Loop para gerar a tabuada de 1 a 10
            console.log(`${numero} x ${i} = ${numero * i}`);//Exibe o resultado no console
        }
    } else {
        console.log("Por favor, insira um número válido."); //Mensagem de erro para entradas inválidas
    }

    rl.close(); //Fecha a interface de leitura
});

