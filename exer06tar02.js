/*6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

// Definindo o array de objetos funcionarios
const funcionarios = [
    { nome: "Carolina Beatriz", cargo: "Data Scientist", salario: 8700 },
    { nome: "Antonia Claudia", cargo: "DBA", salario: 8300},
    { nome: "Pedro Hënrique", cargo: "Analista de Sistema Web", salario: 7210},
    { nome: "Jéssica", cargo: "Engenheira de Software computacional", salario: 13000}
  ];
  
  // Valor mínimo do salário para filtrar
  const salarioMinimo = 10000
  
   // Usando for...of para filtrar e exibir os funcionários com salário maior que o valor específico
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
  }
  