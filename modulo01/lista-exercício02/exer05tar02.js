/*Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

// Definindo o array de objetos alunos
const alunos = [
    { nome: "Júlio Cesar", nota1: 9.2, nota2: 6.3 },
    { nome: "Giovanna", nota1: 8.5, nota2: 7.3 },
    { nome: "Eduardo", nota1: 6.5, nota2: 9.6 },
    { nome: "Manuella", nota1: 7.4, nota2: 6.9 }
  ];
  
  // Usando for...of para calcular a média e exibir o nome e média de cada aluno
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
  }
  