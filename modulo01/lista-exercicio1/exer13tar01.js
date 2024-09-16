/*13. Fazer um algoritmo para receber números decimais até que o usuário 
digite 0 e fazer a média aritmética desses números.*/

const readline = require('readline');

const rl = readline.createInterface({//Interface entrada/saída
    input: process.stdin,
    output: process.stdout
});

let soma = 0; //Variável para armazenar a soma dos números
let contador = 0; //Contador para rastrear quantos números foram inseridos

function solicitarNumero() {//Funçao solicitar número decimal
    rl.question('Digite um número decimal (ou 0 para sair): ', (input) => {
        let numero = parseFloat(input); //Converte a entrada para um número decimal

        if (isNaN(numero)) { //Verifica se a entrada é um número válido
            console.log('Por favor, insira um número válido.');
            solicitarNumero(); //Solicita novamente o número
        } else if (numero === 0) { //Verifica se o número é 0
            if (contador === 0) { //Se nenhum número foi inserido, exibe mensagem
                console.log('Nenhum número foi inserido.');
            } else {
                let media = soma / contador; //Calcula a média aritmética
                console.log(`A média aritmética dos números inseridos é: ${media}`);
            }
            rl.close(); //Fecha a interface de leitura
        } else {
            soma += numero; //Adiciona o número à soma
            contador++;//Incrementa o contador
            solicitarNumero();//Solicita o próximo número
        }
    });
}

solicitarNumero();//Inicia a funçao solicitar número
