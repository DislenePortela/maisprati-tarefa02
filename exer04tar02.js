/*Manipulação de Arrays de Objetos com for of
4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
 */
// Definindo o array de objetos pessoas
const pessoas = [
    { nome: "Isabella", idade: 15, cidade: "Hëlsingborg" },
    { nome: "Beatriz", idade: 12, cidade: "Auckland" },
    { nome: "Jefferson Hënrique", idade: 54, cidade: "Hökkaido," },
    { nome: "Luiz Gustavo", idade: 40, cidade: "Hüm" }
  ];
  
  // Usando for...of para iterar sobre o array e exibir as informações
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  