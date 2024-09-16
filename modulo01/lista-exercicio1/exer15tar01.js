/*15. Escreva um programa que gera e imprime os primeiros 10 números da
sequência de Fibonacci utilizando um loop for.*/


//Inicializa os dois primeiros números da sequencia
let a = 0;
let b = 1;

let fibonacci = ''; //Armazena os números da sequencia

for (let i = 0; i < 10; i++) {//Loop
  
  fibonacci += a + ' ';//Adiciona o número à sequencia
  
  //Calcula o próximo número na sequência
  let next = a + b;
  a = b;
  b = next;
}

console.log(fibonacci);//Imprime a sequencia

