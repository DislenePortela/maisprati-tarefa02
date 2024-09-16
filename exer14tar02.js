/*14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

// Definindo o objeto empresa com a propriedade departamentos
const empresa = {
    departamentos: [
      {
        nome: "Compras",
        funcionarios: ["Luisa Hëlena", "Guilherme", "Felipe"]
      },
      {
        nome: "Vendas",
        funcionarios: ["Bruno", "Gabriela", "Luiz Carlos"]
      },
      {
        nome: "TI",
        funcionarios: ["Gustavo", "Hëloisa", "Elena"]
      }
    ]
  };
  
  // Usando for...in para iterar sobre os departamentos
  for (const indice in empresa.departamentos) {
    const departamento = empresa.departamentos[indice];
  
    // Usando for...of para iterar sobre os funcionários de cada departamento
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
  }
  